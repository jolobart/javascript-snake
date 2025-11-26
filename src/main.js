import { k } from "./kaboomLoader.js";

const SPEED = 400;
const BULLET_SPEED = 300;

const player = k.add([
	k.sprite("snake"), 
	k.scale(.5),
	k.pos(k.center())     
]);

function spawnPoison() {
	const start = k.vec2(player.pos);
    const target = k.mousePos();

    const dir = target.sub(start).unit();
    let angle = dir.angle();
	angle += 90;

	k.add([
        k.sprite("poison"),
		k.scale(.4),
		k.pos(start),
        k.move(dir, BULLET_SPEED),
		k.rotate(angle), 
        "poison"
	]);
};

k.onClick(() => {
	spawnPoison();
});


k.onKeyDown("a", () => {
	player.move(-SPEED, 0)
});

k.onKeyDown("d", () => {
	player.move(SPEED, 0)
});

k.onKeyDown("w", () => {
	player.move(0, -SPEED)
});

k.onKeyDown("s", () => {
	player.move(0, SPEED)
});


