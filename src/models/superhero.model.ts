export interface SuperheroDB {
	id: number;
	nickname: string;
	real_name: string;
	origin_description: string;
	catch_phrase: string;
	superpowers: string; // stored in DB as JSON string
	created_at?: string;
	updated_at?: string;
	image?: string | null;
}

export interface Superhero {
	id: number;
	nickname: string;
	real_name: string;
	origin_description: string;
	catch_phrase: string;
	superpowers: string[]; // type used in code
	images?: { id: number; image_url: string; created_at: string; updated_at: string }[];
	image?: string | null;
	created_at?: string;
	updated_at?: string;
}
