import { css } from "@repo/style/css";
export function Button() {
	return (
		<button
			class={css({
				color: "white",
				bg: "blue.600",
				_hover: {
					bg: "blue.700",
				},
				_active: {
					bg: "red.700",
				},
			})}
		>
			Hello World
		</button>
	);
}
