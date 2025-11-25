import { k } from "./kaboomLoader.js";

const SPEED = 400;
const BULLET_SPEED = 600;

const player = k.add([
	k.sprite("snake"), 
	k.pos(k.center())     
]);

console.log(  );

const poison = k.add([
	, 
	k.pos(player.pos.x + 200, player.pos.y + 100)     
]);

function spawnPoison(px, py) {
	k.add([
        k.sprite("poison"),
		k.area(),
		k.pos(px, py),
		k.anchor("center"),
		k.move(k.UP, BULLET_SPEED),
		k.offscreen({ destroy: true }),
		"bullet"
	]);
}

k.onKeyPress("space", () => {
	spawnPoison(player.pos.x + 50, player.pos.y);
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


