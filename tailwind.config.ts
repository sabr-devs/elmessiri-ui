/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',

  theme: {
  	screens: {
  		xs: '475px',
  		'1xl': '1400px',
            ...defaultTheme.screens
  	},
  	container: {
  		center: true
  	},
  	extend: {
      fontFamily: {
        Inter: ["'Inter', sans-serif"],
        jakarta_sans: ["'Plus Jakarta Sans', sans-serif"],
        playfair: ["'Playfair Display', serif"],
      },
  		colors: {
  			primary: {
  				'100': '#F3F8E8',
  				'200': '#C4F241',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			dark: {
  				'100': '#141410',
  				'200': '#212220',
  				'300': '#191A17',
  				DEFAULT: '#131410',
  				gradient: '#191917'
  			},
  			gray: {
  				'50': '#F7F7F7',
  				'100': '#DCE0D3',
  				'200': '#D9E0C5',
  				DEFAULT: '#F6F8F1',
  				darkGradient: 'rgba(217, 224, 197, .07)'
  			},
  			borderColor: {
  				DEFAULT: '#EDF0E6',
  				dark: '#373935'
  			},
  			paragraph: {
  				DEFAULT: '#18181B',
  				light: '#5D6167'
  			},
  			rating: {
  				DEFAULT: '#FFC107'
  			},
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
  			}
  		},
  		dropShadow: {
  			nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
  			icon: ' 0px 0px 20px 0px rgba(0, 0, 0, 0.07)'
  		},
  		boxShadow: {
  			nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
  			box: ' 0px 5px 50px 0px rgba(0, 0, 0, 0.07)'
  		},
  		borderRadius: {
  			large: '40px',
  			medium: '20px',
  			DEFAULT: '12px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'15': '60px',
  			'25': '100px',
  			'150': '150px'
  		},
  		keyframes: {
  			'bounce-open': {
  				'0%': {
  					transform: 'scale(0.7)'
  				},
  				'45%': {
  					transform: 'scale(1.05)'
  				},
  				'80%': {
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					transform: 'scale(1)'
  				}
  			},
  			floating: {
  				'0%, 100%': {
  					transform: 'translate(0,  0px)'
  				},
  				'50%': {
  					transform: 'translate(0, -50px)'
  				}
  			},
  			floatingDown: {
  				'0%, 100%': {
  					transform: 'translate(0,  0px)'
  				},
  				'50%': {
  					transform: 'translate(0, 50px)'
  				}
  			}
  		},
  		animation: {
  			bounce: 'bounce-open 0.3s',
  			floating: 'floating 5000ms ease-in-out infinite',
  			floatingDown: 'floatingDown 5000ms ease-in-out infinite'
  		},
  		backgroundSize: {
  			full: '100%'
  		},
  		cursor: {
  			fancy: 'url(/images/cursor.png), default'
  		}
  	}
  },
  safelist: [
    'nav-sticky',
    'active',
    {
      pattern: /scale-/,
    },
  ],
  plugins: [tailwindcssAnimate],
}  
