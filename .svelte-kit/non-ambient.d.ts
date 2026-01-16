
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/[[preview=preview]]/about" | "/api" | "/api/preview" | "/[[preview=preview]]/contact" | "/[[preview=preview]]/partners" | "/[[preview=preview]]/process" | "/[[preview=preview]]/resources" | "/slice-simulator" | "/[[preview=preview]]" | "/[[preview=preview]]/[uid]";
		RouteParams(): {
			"/[[preview=preview]]/about": { preview?: string };
			"/[[preview=preview]]/contact": { preview?: string };
			"/[[preview=preview]]/partners": { preview?: string };
			"/[[preview=preview]]/process": { preview?: string };
			"/[[preview=preview]]/resources": { preview?: string };
			"/[[preview=preview]]": { preview?: string };
			"/[[preview=preview]]/[uid]": { preview?: string; uid: string }
		};
		LayoutParams(): {
			"/": { preview?: string; uid?: string };
			"/[[preview=preview]]/about": { preview?: string };
			"/api": Record<string, never>;
			"/api/preview": Record<string, never>;
			"/[[preview=preview]]/contact": { preview?: string };
			"/[[preview=preview]]/partners": { preview?: string };
			"/[[preview=preview]]/process": { preview?: string };
			"/[[preview=preview]]/resources": { preview?: string };
			"/slice-simulator": Record<string, never>;
			"/[[preview=preview]]": { preview?: string; uid?: string };
			"/[[preview=preview]]/[uid]": { preview?: string; uid: string }
		};
		Pathname(): "/" | `${string}/about` & {} | `${string}/about/` & {} | "/api" | "/api/" | "/api/preview" | "/api/preview/" | `${string}/contact` & {} | `${string}/contact/` & {} | `${string}/partners` & {} | `${string}/partners/` & {} | `${string}/process` & {} | `${string}/process/` & {} | `${string}/resources` & {} | `${string}/resources/` & {} | "/slice-simulator" | "/slice-simulator/" | `${string}` & {} | `${string}/` & {} | `${string}/${string}` & {} | `${string}/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/apple-touch-icon.png" | "/browserconfig.xml" | "/favicon-48x48.png" | "/favicon.ico" | "/favicon.svg" | "/images/about/aboutHero.jpg" | "/images/about/flagThumb.jpg" | "/images/about/patch.jpg" | "/images/background_placeholder.svg" | "/images/home/bgVideoPlaceholder.jpg" | "/images/home/doctor.jpg" | "/images/home/doctor_mobile.jpg" | "/images/home/helicopter.png" | "/images/home/heroText.svg" | "/images/home/iwoJimaStatue.png" | "/images/home/militaryChild.png" | "/images/home/soldier.png" | "/images/home/stethoscope.png" | "/images/home/surgeonsPlaceholder.png" | "/images/home/timeLine.svg" | "/images/home/timeline1.svg" | "/images/home/timeline1_mobile.svg" | "/images/home/timeline2.svg" | "/images/home/timeline2_mobile.svg" | "/images/home/timeline3.svg" | "/images/home/timeline3_mobile.svg" | "/images/home/veteran.png" | "/images/image_placeholder.svg" | "/images/map_placeholder.svg" | "/images/partners/4web.jpg" | "/images/partners/4web.png" | "/images/partners/ctl.png" | "/images/partners/difus.jpg" | "/images/partners/edge.png" | "/images/partners/expanding.png" | "/images/partners/metalogix.png" | "/images/partners/partnersHero.jpg" | "/images/partners/partners_duotone/.DS_Store" | "/images/partners/partners_duotone/4web.png" | "/images/partners/partners_duotone/AEGIS-SPINE-logo-300x94.png" | "/images/partners/partners_duotone/EDGe.png" | "/images/partners/partners_duotone/Leith.png" | "/images/partners/partners_duotone/Metalogix.png" | "/images/partners/partners_duotone/SpinalSimplicityLogo.Master.png" | "/images/partners/partners_duotone/aurora.png" | "/images/partners/partners_duotone/axial_biologics_logo.png" | "/images/partners/partners_duotone/bonebridge.png" | "/images/partners/partners_duotone/caerus.png" | "/images/partners/partners_duotone/centinel spine.png" | "/images/partners/partners_duotone/ciboloSpine.jpg" | "/images/partners/partners_duotone/ctl.png" | "/images/partners/partners_duotone/difusion.png" | "/images/partners/partners_duotone/expanding innovations.png" | "/images/partners/partners_duotone/pathkeeper.png" | "/images/partners/partners_duotone/revogen-duo.png" | "/images/partners/partners_duotone/united ortho.png" | "/images/partners/revogenColor.png" | "/images/process/processHero.jpg" | "/images/process/timeline.svg" | "/images/process/timeline_mobile.svg" | "/images/profile_placeholder.jpeg" | "/images/profile_placeholder.png" | "/pdfs/MSOT_Capabilities.pdf" | "/pdfs/MSOT_ChargeSheet.pdf" | "/robots.txt" | "/site.webmanifest" | "/web-app-manifest-192x192.png" | "/web-app-manifest-512x512.png" | string & {};
	}
}