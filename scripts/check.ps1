#!/usr/bin/pwsh

$ModsDir = "mods"
$ListFile = "$ModsDir/mods.txt"
$AutoRemove = $args -contains "--remove"

if (-not (Test-Path $ListFile)) {
    Write-Host "Error: file $ListFile not found" -ForegroundColor Red
    exit 1
}

$CurrentFiles = Get-ChildItem -Path $ModsDir -Filter *.jar | Select-Object -ExpandProperty Name
$TargetFiles = Get-Content $ListFile | ForEach-Object { ($_ -split '\*mods/')[1] }

$ToRemove = $CurrentFiles | Where-Object { $_ -notin $TargetFiles }
$ToAdd = $TargetFiles | Where-Object { $_ -notin $CurrentFiles }

if ($ToRemove) {
    Write-Host "`nRemove:" -ForegroundColor Red
    foreach ($mod in $ToRemove) {
        if ($AutoRemove) {
            Remove-Item (Join-Path $ModsDir $mod) -Force
            Write-Host "- $mod (DELETED)" -ForegroundColor Gray
        } else {
            Write-Host "- $mod" -ForegroundColor Red
        }
    }
}

if ($ToAdd) {
    Write-Host "`nAdd:" -ForegroundColor Green
    foreach ($mod in $ToAdd) {
        Write-Host "+ $mod" -ForegroundColor Green
    }
}

if (-not $ToRemove -and -not $ToAdd) {
    Write-Host "`nProject already synced!" -ForegroundColor Cyan
} elseif (-not $AutoRemove -and $ToRemove) {
    Write-Host "`nExecute with --remove to auto remove" -ForegroundColor Yellow
}

Write-Host ""
