# Deploy to EdgeOne Pages (local CLI)
#
# One-time setup (pick one):
#   A) edgeone login          # browser login, no token in files
#   B) set EDGEONE_API_TOKEN  # for non-interactive deploy
#
# Usage:
#   npm run deploy

param(
    [string]$ProjectName = "patrick-wen-site"
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Remove-Item Env:HTTP_PROXY -ErrorAction SilentlyContinue
Remove-Item Env:HTTPS_PROXY -ErrorAction SilentlyContinue
$env:NO_PROXY = "*"

Write-Host "Building..."
npm run build

Write-Host "Deploying dist/ to EdgeOne Pages..."
if ($env:EDGEONE_API_TOKEN) {
    npx edgeone pages deploy ./dist -n $ProjectName -t $env:EDGEONE_API_TOKEN
} else {
    npx edgeone pages deploy ./dist -n $ProjectName
}
