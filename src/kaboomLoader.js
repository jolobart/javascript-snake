import kaboom from "../lib/kaboom.mjs";

export const scale = 2;

export const k = kaboom({
    width: 640 * scale,
    height: 360 * scale,
    scale,
    letterbox: true,
    global: false,
});

k.loadSprite("snake", "../assets/Snake.png");
k.loadSprite("poison", "../assets/Poison.png")