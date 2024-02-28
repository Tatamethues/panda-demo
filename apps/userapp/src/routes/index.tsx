import { Flex, styled } from "@repo/style/jsx";
import { flex } from "@repo/style/patterns";
import { Button } from "@repo/ui";

export default function Page() {
	return (
		<div
			class={flex({
				direction: "column",
			})}
		>
			<Flex direction="column">Hello</Flex>
			<styled.div color="red.600">aaa</styled.div>

			<Button />
		</div>
	);
}
