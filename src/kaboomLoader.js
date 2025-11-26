import kaboom from "../lib/kaboom.mjs";

export const k = kaboom({
    width: 640,
    height: 360,
    letterbox: true,
    global: false,
});

k.loadSprite("snake", "../assets/Snake.png");
k.loadSprite("poison", "../assets/Poison.png")