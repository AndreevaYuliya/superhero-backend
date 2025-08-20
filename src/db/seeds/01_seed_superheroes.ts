import { Knex } from 'knex';

const seed = async (knex: Knex): Promise<void> => {
	await knex('superhero_images').del();
	await knex('superheroes').del();

	const insertedIds = (
		await knex('superheroes')
			.insert([
				{
					nickname: 'Superman',
					real_name: 'Clark Kent',
					origin_description: 'From Krypton',
					superpowers: JSON.stringify(['flight', 'heat vision', 'invulnerability']),
					catch_phrase: 'Up in the sky!',
				},

				{
					nickname: 'Spider-Man',
					real_name: 'Peter Parker',
					origin_description:
						"Bitten by a radioactive spider during a school field trip, Peter gained superhuman strength, agility, and the ability to cling to walls. He learned that 'with great power comes great responsibility,' inspiring him to fight crime in New York City.",
					superpowers: JSON.stringify([
						'Wall-crawling',
						'superhuman agility',
						'enhanced strength',
						'spider-sense (danger detection)',
						'web-shooting (via mechanical web shooters)',
					]),
					catch_phrase: 'With great power comes great responsibility',
				},

				{
					nickname: 'Wonder Woman',
					real_name: 'Diana Prince',
					origin_description:
						'Princess of the Amazons, sculpted from clay and brought to life by the Greek gods.',
					superpowers: JSON.stringify([
						'super strength',
						'flight',
						'combat skills',
						'lasso of truth',
						'invulnerable bracelets',
					]),
					catch_phrase:
						'In the name of all that is good, your wrath upon the wicked ends here!',
				},

				{
					nickname: 'Iron Man',
					real_name: 'Tony Stark',
					origin_description:
						'Genius billionaire inventor who built a powered armor suit to escape captivity and fight evil.',
					superpowers: JSON.stringify([
						'powered armor',
						'flight',
						'energy repulsors',
						'advanced weaponry',
						'technological interface',
					]),
					catch_phrase: 'I am Iron Man.',
				},

				{
					nickname: 'Black Panther',
					real_name: 'T’Challa',
					origin_description:
						'King of Wakanda, enhanced by the mystical heart-shaped herb, protector of his people.',
					superpowers: JSON.stringify([
						'super strength',
						'agility',
						'enhanced senses',
						'accelerated healing',
						'vibranium suit',
						'combat skills',
					]),
					catch_phrase: 'Wakanda forever!',
				},

				{
					nickname: 'Thor',
					real_name: 'Thor Odinson',
					origin_description:
						'Norse god of thunder from Asgard, wielder of the enchanted hammer Mjolnir.',
					superpowers: JSON.stringify([
						'control over thunder',
						'flight',
						'super strength',
						'weather manipulation',
						'immortality',
					]),
					catch_phrase: 'I say thee nay!',
				},

				{
					nickname: 'Hulk',
					real_name: 'Bruce Banner',
					origin_description:
						'Scientist exposed to gamma radiation, transforming into a giant green rage-powered superhero.',
					superpowers: JSON.stringify([
						'super strength',
						'durability',
						'healing factor',
						'leap great distances',
					]),
					catch_phrase: 'Hulk smash!',
				},

				{
					nickname: 'Captain America',
					real_name: 'Steve Rogers',
					origin_description:
						'Enhanced by the Super-Soldier serum during WWII to become a symbol of hope and justice.',
					superpowers: JSON.stringify([
						'enhanced strength',
						'speed',
						'agility',
						'durability',
						'expert tactician',
						'shield mastery',
					]),
					catch_phrase: 'I can do this all day.',
				},

				{
					nickname: 'Flash',
					real_name: 'Barry Allen',
					origin_description:
						'Struck by lightning and doused in chemicals, gaining the power of super-speed.',
					superpowers: JSON.stringify([
						'super speed',
						'time travel',
						'phasing through objects',
						'accelerated healing',
					]),
					catch_phrase: 'Life doesn’t give us purpose. We give life purpose.',
				},

				{
					nickname: 'Green Lantern',
					real_name: 'Hal Jordan',
					origin_description:
						'Chosen by a dying alien to wield a power ring fueled by willpower to protect the universe.',
					superpowers: JSON.stringify([
						'power ring constructs',
						'flight',
						'energy projection',
						'force fields',
					]),
					catch_phrase: 'In brightest day, in blackest night...',
				},

				{
					nickname: 'Aquaman',
					real_name: 'Arthur Curry',
					origin_description:
						'Half-human, half-Atlantean, king of Atlantis, protector of the seas.',
					superpowers: JSON.stringify([
						'underwater breathing',
						'super strength',
						'telepathy with sea life',
						'enhanced swimming',
					]),
					catch_phrase: 'The ocean is my kingdom.',
				},

				{
					nickname: 'Doctor Strange',
					real_name: 'Stephen Strange',
					origin_description:
						'Former neurosurgeon who became Sorcerer Supreme after a car accident ended his surgical career.',
					superpowers: JSON.stringify([
						'magic manipulation',
						'dimensional travel',
						'time manipulation',
						'astral projection',
					]),
					catch_phrase: 'By the Hoary Hosts of Hoggoth!',
				},

				{
					nickname: 'Black Widow',
					real_name: 'Natasha Romanoff',
					origin_description:
						'Former Russian spy turned Avenger, highly skilled in espionage and combat.',
					superpowers: JSON.stringify([
						'expert martial artist',
						'espionage skills',
						'peak human agility',
						'marksmanship',
					]),
					catch_phrase:
						'At some point, we all have to choose between what the world wants you to be and who you are.',
				},

				{
					nickname: 'Hawkeye',
					real_name: 'Clint Barton',
					origin_description:
						'Master archer trained as an Avenger and S.H.I.E.L.D agent.',
					superpowers: JSON.stringify([
						'master archery',
						'marksmanship',
						'martial arts',
						'acrobatics',
					]),
					catch_phrase: 'You don’t see me coming.',
				},

				{
					nickname: 'Wolverine',
					real_name: 'Logan',
					origin_description:
						'Mutant with retractable claws and accelerated healing, survivor of Weapon X program.',
					superpowers: JSON.stringify([
						'healing factor',
						'adamantium claws',
						'enhanced senses',
						'superhuman strength',
						'longevity',
					]),
					catch_phrase: "I'm the best there is at what I do.",
				},

				{
					nickname: 'Deadpool',
					real_name: 'Wade Wilson',
					origin_description:
						'Former mercenary given a regenerative healing factor through an experimental procedure.',
					superpowers: JSON.stringify([
						'regeneration',
						'superhuman agility',
						'combat skills',
						'unpredictability',
					]),
					catch_phrase: 'Maximum effort!',
				},

				{
					nickname: 'Daredevil',
					real_name: 'Matt Murdock',
					origin_description:
						'Blind lawyer whose other senses were heightened to superhuman levels after a chemical accident.',
					superpowers: JSON.stringify([
						'enhanced senses',
						'martial arts',
						'agility',
						'wall-crawling like reflexes',
					]),
					catch_phrase: 'Justice is blind, but I am not.',
				},

				{
					nickname: 'Green Arrow',
					real_name: 'Oliver Queen',
					origin_description:
						'Billionaire vigilante skilled in archery and combat, defending Star City.',
					superpowers: JSON.stringify([
						'master archer',
						'hand-to-hand combat',
						'tactics',
						'acrobatics',
					]),
					catch_phrase: 'You have failed this city!',
				},

				{
					nickname: 'Captain Marvel',
					real_name: 'Carol Danvers',
					origin_description:
						'Air Force pilot transformed into a superpowered hero after exposure to alien technology.',
					superpowers: JSON.stringify([
						'super strength',
						'flight',
						'energy projection',
						'durability',
					]),
					catch_phrase: 'Higher, further, faster, baby.',
				},

				{
					nickname: 'Scarlet Witch',
					real_name: 'Wanda Maximoff',
					origin_description:
						'Mutant with chaos magic, reality-warping abilities, and energy manipulation.',
					superpowers: JSON.stringify([
						'reality manipulation',
						'magic',
						'telekinesis',
						'energy projection',
					]),
					catch_phrase: 'No more mutants. Just chaos.',
				},

				{
					nickname: 'Vision',
					real_name: 'Vision',
					origin_description:
						'Synthezoid created by Ultron and powered by the Mind Stone, joins Avengers to fight for good.',
					superpowers: JSON.stringify([
						'density control',
						'flight',
						'energy beams',
						'super intelligence',
					]),
					catch_phrase: 'I am alive. I am sentient. I am Vision.',
				},

				{
					nickname: 'Ant-Man',
					real_name: 'Scott Lang',
					origin_description:
						'Ex-con turned hero who can shrink and communicate with ants using a specialized suit.',
					superpowers: JSON.stringify([
						'size manipulation',
						'super strength when small',
						'communication with ants',
						'heist skills',
					]),
					catch_phrase: "I'm just a guy in a suit.",
				},

				{
					nickname: 'Shazam',
					real_name: 'Billy Batson',
					origin_description:
						"Teenager who transforms into an adult superhero by saying the magic word 'Shazam'.",
					superpowers: JSON.stringify([
						'super strength',
						'flight',
						'magic lightning',
						'wisdom of Solomon',
					]),
					catch_phrase: 'Shazam!',
				},

				{
					nickname: 'Storm',
					real_name: 'Ororo Munroe',
					origin_description:
						'Mutant with the ability to control the weather, former queen of Wakanda and X-Men member.',
					superpowers: JSON.stringify([
						'weather manipulation',
						'flight',
						'lightning generation',
						'enhanced senses',
					]),
					catch_phrase: 'The storm is coming!',
				},

				{
					nickname: 'Cyclops',
					real_name: 'Scott Summers',
					origin_description:
						'Mutant and leader of X-Men, with optic blasts that cannot be controlled without his visor.',
					superpowers: JSON.stringify([
						'optic blasts',
						'tactical genius',
						'martial arts',
					]),
					catch_phrase: 'Open your eyes and see.',
				},
			])
			.returning('id')
	).map((row) => row.id);

	const supermanId = insertedIds[0];
	const spidermanId = insertedIds[1];
	const wonderWomanId = insertedIds[2];
	const ironManId = insertedIds[3];
	const blackPantherId = insertedIds[4];
	const thorId = insertedIds[5];
	const hulkId = insertedIds[6];
	const captainAmericaId = insertedIds[7];
	const flashId = insertedIds[8];
	const greenLanternId = insertedIds[9];
	const aquamanId = insertedIds[10];
	const doctorStrangeId = insertedIds[11];
	const blackWidowId = insertedIds[12];
	const hawkeyeId = insertedIds[13];
	const wolverineId = insertedIds[14];
	const deadpoolId = insertedIds[15];
	const daredevilId = insertedIds[16];
	const greenArrowId = insertedIds[17];
	const captainMarvelId = insertedIds[18];
	const scarletWitchId = insertedIds[19];
	const visionId = insertedIds[20];
	const antManId = insertedIds[21];
	const shazamId = insertedIds[22];
	const stormId = insertedIds[23];
	const cyclopsId = insertedIds[24];

	await knex('superhero_images').insert([
		{ superhero_id: supermanId, image_url: '/uploads/superman1.jpg' },
		{ superhero_id: supermanId, image_url: '/uploads/superman2.jpg' },

		{ superhero_id: spidermanId, image_url: '/uploads/spiderman1.jpg' },
		{ superhero_id: spidermanId, image_url: '/uploads/spiderman2.jpg' },

		{ superhero_id: wonderWomanId, image_url: '/uploads/wonderwoman1.jpg' },
		{ superhero_id: wonderWomanId, image_url: '/uploads/wonderwoman2.jpg' },

		{ superhero_id: ironManId, image_url: '/uploads/ironman1.jpg' },
		{ superhero_id: ironManId, image_url: '/uploads/ironman2.jpg' },

		{ superhero_id: blackPantherId, image_url: '/uploads/blackpanther1.jpg' },
		{ superhero_id: blackPantherId, image_url: '/uploads/blackpanther2.jpg' },

		{ superhero_id: thorId, image_url: '/uploads/thor1.jpg' },
		{ superhero_id: thorId, image_url: '/uploads/thor2.jpg' },

		{ superhero_id: hulkId, image_url: '/uploads/hulk1.jpg' },
		{ superhero_id: hulkId, image_url: '/uploads/hulk2.jpg' },

		{ superhero_id: captainAmericaId, image_url: '/uploads/captainamerica1.jpg' },
		{ superhero_id: captainAmericaId, image_url: '/uploads/captainamerica2.jpg' },

		{ superhero_id: flashId, image_url: '/uploads/flash1.jpg' },
		{ superhero_id: flashId, image_url: '/uploads/flash2.jpg' },

		{ superhero_id: greenLanternId, image_url: '/uploads/greenlantern1.jpg' },
		{ superhero_id: greenLanternId, image_url: '/uploads/greenlantern2.jpg' },

		{ superhero_id: aquamanId, image_url: '/uploads/aquaman1.jpg' },
		{ superhero_id: aquamanId, image_url: '/uploads/aquaman2.jpg' },

		{ superhero_id: doctorStrangeId, image_url: '/uploads/doctorstrange1.jpg' },
		{ superhero_id: doctorStrangeId, image_url: '/uploads/doctorstrange2.jpg' },

		{ superhero_id: blackWidowId, image_url: '/uploads/blackwidow1.jpg' },
		{ superhero_id: blackWidowId, image_url: '/uploads/blackwidow2.jpg' },

		{ superhero_id: hawkeyeId, image_url: '/uploads/hawkeye1.jpg' },
		{ superhero_id: hawkeyeId, image_url: '/uploads/hawkeye2.jpg' },

		{ superhero_id: wolverineId, image_url: '/uploads/wolverine1.jpg' },
		{ superhero_id: wolverineId, image_url: '/uploads/wolverine2.jpg' },

		{ superhero_id: deadpoolId, image_url: '/uploads/deadpool1.jpg' },
		{ superhero_id: deadpoolId, image_url: '/uploads/deadpool2.jpg' },

		{ superhero_id: daredevilId, image_url: '/uploads/daredevil1.jpg' },
		{ superhero_id: daredevilId, image_url: '/uploads/daredevil2.jpg' },

		{ superhero_id: greenArrowId, image_url: '/uploads/greenarrow1.jpg' },
		{ superhero_id: greenArrowId, image_url: '/uploads/greenarrow2.jpg' },

		{ superhero_id: captainMarvelId, image_url: '/uploads/captainmarvel1.jpg' },
		{ superhero_id: captainMarvelId, image_url: '/uploads/captainmarvel2.jpg' },

		{ superhero_id: scarletWitchId, image_url: '/uploads/scarletwitch1.jpg' },
		{ superhero_id: scarletWitchId, image_url: '/uploads/scarletwitch2.jpg' },

		{ superhero_id: visionId, image_url: '/uploads/vision1.jpg' },
		{ superhero_id: visionId, image_url: '/uploads/vision2.jpg' },

		{ superhero_id: antManId, image_url: '/uploads/antman1.jpg' },
		{ superhero_id: antManId, image_url: '/uploads/antman2.jpg' },

		{ superhero_id: shazamId, image_url: '/uploads/shazam1.jpg' },
		{ superhero_id: shazamId, image_url: '/uploads/shazam2.jpg' },

		{ superhero_id: stormId, image_url: '/uploads/storm1.jpg' },
		{ superhero_id: stormId, image_url: '/uploads/storm2.jpg' },

		{ superhero_id: cyclopsId, image_url: '/uploads/cyclops1.jpg' },
		{ superhero_id: cyclopsId, image_url: '/uploads/cyclops2.jpg' },
	]);
};

export default seed;
