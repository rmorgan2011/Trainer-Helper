
for ( $c=51; $c -lt 101; $c++){
    $string = "https://pokeapi.co/api/v2/pokemon/" + ($c -as [string]) + "/"
    $stringTwo = "data" + ($c -as [string]) + ".json"
	wget $string -O $stringTwo
}