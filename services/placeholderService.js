// Placeholder image service for speaker gallery
export class PlaceholderService {
	static baseUrl = 'https://picsum.photos';
	static fallbackUrl = 'https://via.placeholder.com';
	
	// Generate a realistic placeholder image
	static getImage(width = 400, height = 300, seed = null) {
		try {
			const seedParam = seed ? `?random=${seed}` : `?random=${Math.floor(Math.random() * 1000)}`;
			return `${this.baseUrl}/${width}/${height}${seedParam}`;
		} catch (error) {
			// Fallback to via.placeholder.com if picsum fails
			return `${this.fallbackUrl}/${width}x${height}/7C3AED/FFFFFF?text=Speaker+Image`;
		}
	}

	// Generate speaker-specific media gallery
	static getSpeakerMediaGallery(speakerName = 'Speaker') {
		const cleanName = speakerName.replace(/\s+/g, '+');
		
		return [
			// Main featured image/video (larger)
			{
				type: 'video',
				thumbnail: this.getImage(800, 600, 1),
				title: `${speakerName} - Keynote Presentation`,
				url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
			},
			// Secondary images (smaller)
			{
				type: 'image',
				url: this.getImage(400, 300, 2),
				title: `${speakerName} - Speaking Event`
			},
			{
				type: 'video',
				thumbnail: this.getImage(400, 300, 3),
				title: `${speakerName} - Leadership Talk`,
				url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
			},
			{
				type: 'image',
				url: this.getImage(400, 300, 4),
				title: `${speakerName} - Conference Panel`
			},
			{
				type: 'image',
				url: this.getImage(400, 300, 5),
				title: `${speakerName} - Workshop Session`
			},
			{
				type: 'video',
				thumbnail: this.getImage(400, 300, 6),
				title: `${speakerName} - Interview`,
				url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
			},
			{
				type: 'image',
				url: this.getImage(400, 300, 7),
				title: `${speakerName} - Awards Ceremony`
			}
		];
	}

	// Generate similar speaker placeholders
	static getSimilarSpeakerImage(speakerName, index = 0) {
		return this.getImage(200, 250, 100 + index);
	}

	// Generate book cover placeholders
	static getBookCover(title, index = 0) {
		return this.getImage(120, 180, 200 + index);
	}

	// Generate main speaker portrait
	static getSpeakerPortrait(speakerName, index = 0) {
		return this.getImage(320, 384, 300 + index);
	}

	// Alternative service for more themed images (if needed)
	static getThemedImage(theme = 'business', width = 400, height = 300, index = 0) {
		const themes = {
			business: 'conference+meeting+professional',
			sports: 'athlete+stadium+competition',
			technology: 'tech+innovation+computer',
			leadership: 'leader+team+success'
		};
		
		const keywords = themes[theme] || 'professional+speaker';
		// Using a more reliable placeholder service
		return `https://source.unsplash.com/${width}x${height}/?${keywords}&${index}`;
	}
}

// Convenience functions for common use cases
export const getMediaGallery = (speakerName) => PlaceholderService.getSpeakerMediaGallery(speakerName);
export const getSimilarSpeakerImage = (name, index) => PlaceholderService.getSimilarSpeakerImage(name, index);
export const getBookCover = (title, index) => PlaceholderService.getBookCover(title, index);
export const getSpeakerPortrait = (name) => PlaceholderService.getSpeakerPortrait(name);