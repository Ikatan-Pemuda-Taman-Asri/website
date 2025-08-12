import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const [theme, setThemeState] = React.useState<"theme-light" | "dark" | "system">("system");

	React.useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as "theme-light" | "dark" | "system" | null;
		setThemeState(storedTheme || "system");
	}, []);

	const setTheme = (newTheme: "theme-light" | "dark" | "system") => {
		setThemeState(newTheme);
		localStorage.setItem("theme", newTheme);

		const isDark =
			newTheme === "dark" ||
			(newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	};

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="font-medium">
				<DropdownMenuItem onClick={() => setTheme("theme-light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
