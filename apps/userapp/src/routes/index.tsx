import { Flex } from "@repo/style/jsx";
import { flex } from "@repo/style/patterns";
import { Button } from "@repo/ui";
export default function Page() {
	return (
		<div
			class={flex({
				direction: "column",
			})}
		>
			<Flex>Hello</Flex>
			<Flex>Hello</Flex>

			<Button />
		</div>
	);
}
