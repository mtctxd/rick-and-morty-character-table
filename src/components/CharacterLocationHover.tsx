import React from "react";
import cutWord from "../feature/cutWord";
import { Character } from "../models.ts";

type Props = {
    character: Character;
}

const CharacterLocationHover: React.FC<Props> = ({character}) => (
    <div className="location-popup">
        <div className="location-popup__item location-popup__header">
            Location
        </div>
        <div className="location-popup__content">
            <div className="location-popup__item location-popup__name">
                {character.location.name && cutWord(character.location.name, 14)}
            </div>
            <div className="location-popup__item location-popup__type">
                {character.location.type && cutWord(character.location.type, 14)}
            </div>
        </div>
    </div>
);

export default CharacterLocationHover;