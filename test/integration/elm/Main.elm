module Main exposing (main)

import Html exposing (text)
import Name


main =
    text <| "Hello " ++ Name.planet ++ "."
