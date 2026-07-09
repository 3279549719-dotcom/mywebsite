import { chromium } from "playwright";

const base = process.env.PREVIEW_URL || "http://127.0.0.1:4173";
const insUrl = "https://www.instagram.com/ben.sesko2/";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

try {
  const errors = [];
  page.on("pageerror", (err) => errors.push(String(err)));

  const resp = await page.goto(base, { waitUntil: "networkidle" });
  if (!resp || !resp.ok()) throw new Error("homepage not ok");

  await page.waitForSelector('img[alt*="温嘉华"]', { timeout: 10000 });
  const interestImages = page.locator("#interests img");
  if ((await interestImages.count()) !== 3) {
    throw new Error("expected 3 interest images");
  }

  await page.getByRole("button", { name: "Scroll to About section" }).click();
  await page.waitForFunction(
    () => {
      const el = document.getElementById("about");
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight * 0.5;
    },
    null,
    { timeout: 8000 },
  );

  const ids = ["museum", "hiking", "comic"];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const detail = page.locator(`#interest-detail-${id}`);
    if (await detail.isVisible()) {
      throw new Error(`detail visible before click: ${id}`);
    }
    await page.locator("#interests article").nth(i).locator("button").click();
    await detail.waitFor({ state: "visible", timeout: 5000 });
    const text = await detail.innerText();
    if (!text.trim()) throw new Error(`empty detail for ${id}`);
  }

  const ins = page.locator(`#contact a[href="${insUrl}"]`);
  if ((await ins.count()) !== 1) throw new Error("instagram link missing");
  if ((await ins.getAttribute("target")) !== "_blank") {
    throw new Error("instagram target wrong");
  }
  const rel = await ins.getAttribute("rel");
  if (!rel || !rel.includes("noopener")) throw new Error("instagram rel wrong");

  const mail = page.locator('#contact a[href^="mailto:"]');
  if ((await mail.count()) !== 1) throw new Error("mailto link missing");

  const footer = page.locator("footer");
  await footer.waitFor({ state: "visible" });
  const footerText = await footer.innerText();
  if (!footerText.includes("2026")) throw new Error("footer year missing");
  if (!footerText.includes("Last updated")) throw new Error("footer date missing");

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(base, { waitUntil: "networkidle" });
  const overflow = await page.evaluate(() => {
    return (
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth + 1
    );
  });
  if (overflow) throw new Error("horizontal scroll at 375px");

  if (errors.length) throw new Error(`console errors: ${errors.join("; ")}`);
  console.log("e2e ok");
} finally {
  await browser.close();
}
