const animals = [{
    image: '/images/owl1.jpg',
    type: 'owl',
    name: 'Mr. Beige',
    description: 'The eastern barn owl (Tyto javanica) is usually considered a subspecies group and together with the American barn owl group, the western barn owl group, and sometimes the Andaman masked owl make up the barn owl. The cosmopolitan barn owl is recognized by most taxonomic authorities. A few (including the International Ornithologists\' Union) separate them into distinct species, as is done here. The eastern barn owl is native to southeastern Asia and Australasia.',
    animalId: 'owl1'
  },
  {
    image: '/images/owl2.jpg',
    type: 'owl',
    name: 'Mr. Burrow',
    description: 'The burrowing owl (Athene cunicularia) is a small, long-legged owl found throughout open landscapes of North and South America. Burrowing owls can be found in grasslands, rangelands, agricultural areas, deserts, or any other open dry area with low vegetation.[2] They nest and roost in burrows, such as those excavated by prairie dogs (Cynomys spp.). Unlike most owls, burrowing owls are often active during the day, although they tend to avoid the midday heat. Like many other kinds of owls, though, burrowing owls do most of their hunting from dusk until dawn, when they can use their night vision and hearing to their advantage. Living in open grasslands as opposed to forests, the burrowing owl has developed longer legs that enable it to sprint, as well as fly, when hunting.',
    animalId: 'owl2'
  },
  {
    image: '/images/owl3.jpg',
    type: 'owl',
    name: 'Mr. Short-Ears',
    description: 'The short-eared owl (Asio flammeus) is a species of typical owl (family Strigidae). Owls belonging to genus Asio are known as the eared owls, as they have tufts of feathers resembling mammalian ears. These "ear" tufts may or may not be visible. Asio flammeus will display its tufts when in a defensive pose, although its very short tufts are usually not visible. The short-eared owl is found in open country and grasslands. The genus name Asio is a type of eared owl, and flammeus means "flame-coloured"',
    animalId: 'owl3'
  },
  {
    image: '/images/owl4.jpg',
    type: 'owl',
    name: 'Mr. Horns',
    description: 'The great horned owl (Bubo virginianus), also known as the tiger owl (originally derived from early naturalists description as the winged tiger or tiger of the air) or the hoot owl, is a large owl native to the Americas. It is an extremely adaptable bird with a vast range and is the most widely distributed true owl in the Americas. Its primary diet is rabbits and hares, rats and mice, and voles, although it freely hunts any animal it can overtake, including rodents and other small mammals, larger mid-sized mammals, birds, reptiles, amphibians, and invertebrates.',
    animalId: 'owl4'
  },
  {
    image: '/images/turtle1.jpg',
    type: 'turtle',
    name: 'Chelonia Mydas',
    description: 'The green sea turtle (Chelonia mydas), also known as the green turtle, black (sea) turtle or Pacific green turtle,[3] is a species of large sea turtle of the family Cheloniidae. It is the only species in the genus Chelonia.[4] Its range extends throughout tropical and subtropical seas around the world, with two distinct populations in the Atlantic and Pacific Oceans, but it is also found in the Indian Ocean.[5][6] The common name refers to the usually green fat found beneath its carapace, not to the color of its carapace, which is olive to black.',
    animalId: 'turtle1'
  },
  {
    image: '/images/turtle2.jpg',
    type: 'turtle',
    name: 'Sulcata Tortoise',
    description: 'The African spurred tortoise (Centrochelys sulcata), also called the sulcata tortoise, is a species of tortoise inhabiting the southern edge of the Sahara desert in Africa. It is the third-largest species of tortoise in the world, the largest species of mainland tortoise, and the only extant species in the genus Centrochelys.',
    animalId: 'turtle2'
  },
  {
    image: '/images/turtle3.jpg',
    type: 'turtle',
    name: 'Red-Eared Slider',
    description: 'The red-eared slider (Trachemys scripta elegans), also known as the red-eared terrapin, red-eared slider turtle, red-eared turtle, slider turtle, and water slider turtle, is a semiaquatic turtle belonging to the family Emydidae. It is a subspecies of the pond slider. It is the most popular pet turtle in the United States and is also popular as a pet across the rest of the world.[2] Because of this, they are the most commonly traded turtle in the world.[3] Red-eared sliders are native to the southern United States and northern Mexico, but have become established in other places because of pet releases, and have become an invasive species in many areas where they outcompete native species. The red-eared slider is included in the list of the world\'s 100 most invasive species[4] published by the IUCN.',
    animalId: 'turtle3'
  },
  {
    image: '/images/turtle4.jpg',
    type: 'turtle',
    name: 'Pleurodira',
    description: 'The red-eared slider (Trachemys scripta elegans), also known as the red-eared terrapin, red-eared slider turtle, red-eared turtle, slider turtle, and water slider turtle, is a semiaquatic turtle belonging to the family Emydidae. It is a subspecies of the pond slider. It is the most popular pet turtle in the United States and is also popular as a pet across the rest of the world.[2] Because of this, they are the most commonly traded turtle in the world.[3] Red-eared sliders are native to the southern United States and northern Mexico, but have become established in other places because of pet releases, and have become an invasive species in many areas where they outcompete native species. The red-eared slider is included in the list of the world\'s 100 most invasive species[4] published by the IUCN.',
    animalId: 'turtle4'
  },
  {
    image: '/images/cat1.jpg',
    type: 'felidae',
    name: 'Ocelot',
    description: 'The ocelot (/ˈɒsəlɒt/; Leopardus pardalis) is a small wild cat native to the southwestern United States, Mexico, and Central and South America. This medium-sized cat is characterized by solid black spots and streaks on its coat, round ears, and white neck and undersides. It weighs between 8 and 15.5 kg (18 and 34 lb) and reaches 40–50 cm (15 1⁄2–19 1⁄2 in) at the shoulders. It was first described by Carl Linnaeus in 1758. Two subspecies are recognized: L. p. pardalis and L. p. mitis. Typically active during twilight and at night, the ocelot tends to be solitary and territorial. It is efficient at climbing, leaping and swimming.',
    animalId: 'cat1'
  },
  {
    image: '/images/cat2.jpg',
    type: 'felidae',
    name: 'Canada Lynx',
    description: 'The Canada lynx (Lynx canadensis) is a medium-sized North American cat that ranges across Alaska, Canada and many of the contiguous United States. It is characterized by its long, dense fur, triangular ears with black tufts at the tips, and broad, snowshoe-like paws. Similar to the bobcat (L. rufus), the hindlimbs are longer than the forelimbs, so that the back slopes downward to the front. The Canada lynx stands 48–56 cm (19–22 in) tall at the shoulder and weighs between 5 and 17 kg (11 and 37 lb). The lynx is a good swimmer and an agile climber. The Canada lynx was first described by Robert Kerr in 1792. Three subspecies have been proposed, but their validity is doubted.',
    animalId: 'cat2'
  },
  {
    image: '/images/cat3.jpg',
    type: 'felidae',
    name: 'Fishing Cat',
    description: 'The fishing cat (Prionailurus viverrinus) is a medium-sized wild cat of South and Southeast Asia. Since 2016, it is listed as Vulnerable on the IUCN Red List. Fishing cat populations are threatened by destruction of wetlands and have declined severely over the last decade. The fishing cat lives foremost in the vicinity of wetlands, along rivers, streams, oxbow lakes, in swamps, and mangroves. The fishing cat is the state animal of West Bengal.',
    animalId: 'cat3'
  },
  {
    image: '/images/cat4.jpg',
    type: 'felidae',
    name: 'Black Panther',
    description: 'A black panther is the melanistic colour variant of any Panthera, particularly of the leopard (P. pardus) in Asia and Africa, and the jaguar (P. onca) in the Americas. Black panthers of both species have excess black pigments, but their typical spotted markings are also present. Melanism in the leopard is caused by a recessive allele, and in the jaguar by a dominant allele.',
    animalId: 'cat4'
  }
]

export default animals