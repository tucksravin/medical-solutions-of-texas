import { useSwipe, type SwipeCustomEvent } from "svelte-gestures";

/**
 * Wraps svelte-gestures v5's `useSwipe` (attachments-based API) into a
 * classic Svelte action so existing `use:swipe` callsites can keep their shape.
 *
 *   const swipe = createSwipeAction(handleSwipe);
 *   <div use:swipe>...</div>
 */
export const createSwipeAction = (handler: (e: SwipeCustomEvent) => void) => {
	const gesture = useSwipe(handler, undefined, undefined, true);
	return (node: HTMLElement) => ({ destroy: gesture.swipe(node) });
};
