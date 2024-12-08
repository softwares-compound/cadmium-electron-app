/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"], // Enables class-based dark mode
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Scans for class usage in the project
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					background: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
					DEFAULT: 'hsl(var(--sidebar-background))',
				}
			},
			fontSize: {
				xs: '11px',
				sm: '12px',
				tiny: '13px',
				base: '15px',
				lg: '17px',
				xl: '19px',
				'2xl': '22px',
				'3xl': '25px',
				'4xl': '29px',
				'5xl': '35px',
				'6xl': '41px',
				'7xl': '49px',
				'8xl': '60px',
				'9xl': '72px'
			},
			lineHeight: {
				'1': '0.5rem',
				'2': '0.6rem',
				'3': '0.7rem',
				'4': '0.9rem',
				'5': '1.1rem',
				'6': '1.3rem',
				'7': '1.5rem',
				'8': '1.75rem',
				'9': '2rem',
				'10': '2.25rem',
				none: '0.9',
				tight: '1.1',
				snug: '1.2',
				normal: '1.35',
				relaxed: '1.5',
				loose: '1.75'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			transitionProperty: {
				colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
				shadow: 'box-shadow'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
