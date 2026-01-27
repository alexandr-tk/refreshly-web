import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	// Base styles: Removed 'duration-300' (too slow) -> 'duration-200' (snappy)
	'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				// Default: No scaling. Just a subtle opacity shift.
				default: 'bg-primary text-primary-foreground hover:opacity-90 active:opacity-100',
				destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
				outline: 'border border-input bg-background hover:bg-secondary hover:text-secondary-foreground',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',

				// Premium Variants (Fixed Stability)
				// Accent: Removed scale/shadow-lg movement.
				accent: 'bg-accent text-accent-foreground hover:opacity-90 shadow-sm',

				'accent-outline': 'border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground',

				// Dark: Removed scale.
				dark: 'bg-zinc-900 text-white hover:bg-zinc-800',

				glass: 'backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20',

				// Hero: Removed scale & active bouncy effect.
				hero: 'bg-foreground text-background hover:opacity-90 shadow-md',

				'hero-secondary':
					'bg-white/10 backdrop-blur-sm text-foreground border border-foreground/20 hover:bg-foreground/10',
			},
			size: {
				default: 'h-11 px-6 py-2',
				sm: 'h-9 px-4 text-xs',
				lg: 'h-14 px-8 text-base',
				xl: 'h-16 px-10 text-lg',
				icon: 'h-10 w-10',
			},
			rounded: {
				default: 'rounded-lg',
				full: 'rounded-full',
				none: 'rounded-none',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			rounded: 'default', // Changed default to 'rounded-lg' as per modern standards (optional)
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return <Comp className={cn(buttonVariants({ variant, size, rounded, className }))} ref={ref} {...props} />;
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
