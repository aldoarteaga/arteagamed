export type Testimonial = { quote: string; name: string; place: string };

/**
 * Real member testimonials only, published with written consent.
 * The section stays hidden while this list is empty. Never add invented quotes.
 */
export const testimonials: Testimonial[] = [];
