#!/usr/bin/env sh
echo --% >/dev/null;: ' | out-null
<#'

#
# for not-Windows operating systems
#
deno run --allow-net --allow-read --allow-write --allow-run --allow-sys https://deno.land/x/archaeopteryx/mod.ts dist/

exit #>

#
# for windows (powershell)
#
deno run --allow-net --allow-read --allow-write --allow-run --allow-sys https://deno.land/x/archaeopteryx/mod.ts dist/