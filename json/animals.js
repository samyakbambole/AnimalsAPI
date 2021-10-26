const animals = [
  {
    id: 0,
    name: "Tiger",
    habitat: "Forest",
    species: "Wild Animal (mammal)",
    description:
      "The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. ",
    wikipedia: "https://en.wikipedia.org/wiki/Tiger",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/320px-Tiger_in_Ranthambhore.jpg",
  },
  {
    id: 1,
    name: "Elephant",
    habitat: "Forest",
    species: "Mammal",
    description:
      "Elephants are the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons. ",
    wikipedia: "https://en.wikipedia.org/wiki/Elephant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Elephant_Diversity.jpg/305px-Elephant_Diversity.jpg",
  },
  {
    id: 2,
    name: "Lion",
    habitat: "Grasslands, Savannas",
    species: "Wild Animal (mammal)",
    description:
      "The lion is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail.",
    wikipedia: "https://en.wikipedia.org/wiki/Lion",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/320px-Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 3,
    name: "Pig",
    habitat: "Grasslands",
    species: "Mammal",
    description:
      "A pig is any of the animals in the genus Sus, within the even-toed ungulate family Suidae. Pigs include domestic pigs and their ancestor, the common Eurasian wild boar, along with other species. Pigs, like all suids, are native to the Eurasian and African continents, ranging from Europe to the Pacific islands.",
    wikipedia: "https://en.wikipedia.org/wiki/Pig",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pig_farm_Vampula_9.jpg/320px-Pig_farm_Vampula_9.jpg",
  },
  {
    id: 4,
    name: "Porcupine",
    habitat: "Grasslands, Desert",
    species: "Rodent",
    description:
      "Porcupine are large rodents with coats of sharp spines, or quills, that protect them against predation. The term covers two families of animals: the Old World porcupines of family Hystricidae, and the New World porcupines of family Erethizontidae.",
    wikipedia: "https://en.wikipedia.org/wiki/Porcupine",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PorcupineCabelasSpringfield0511.jpg/180px-PorcupineCabelasSpringfield0511.jpg",
  },
  {
    id: 5,
    name: "Panda",
    habitat: "Tempreature Forests",
    species: "Mammal",
    description:
      "The giant panda, also known as the panda bear or simply the panda, is a bear native to South Central China. It is characterised by its bold black-and-white coat and rotund body. The name giant panda is sometimes used to distinguish it from the red panda, a neighboring musteloid.",
    wikipedia: "https://en.wikipedia.org/wiki/Panda",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/320px-Grosser_Panda.JPG",
  },
  {
    id: 6,
    name: "Parrot",
    habitat: "Tropical and Sub-Tropical Regions",
    species: "Bird",
    description:
      "Parrots, also known as psittacines, are birds of the roughly 398 species in 92 genera comprising the order Psittaciformes, found mostly in tropical and subtropical regions. The order is subdivided into three superfamilies: the Psittacoidea, the Cacatuoidea, and the Strigopoidea.",
    wikipedia: "https://en.wikipedia.org/wiki/Parrot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BlueAndYellowMacaw_AraArarauna.jpg/320px-BlueAndYellowMacaw_AraArarauna.jpg",
  },
  {
    id: 7,
    name: "Monkey",
    habitat: "Forests, Grasslands, High Planes, Mountains",
    species: "Placental Mammals",
    description:
      "There are currently 264 known monkey species.Monkeys can be divided into two groups, Old World monkeys that live in Africa and Asia, and New World monkeys that live in South America.A baboon is an example of an Old World monkey, while a marmoset is an example of a New World monkey.Apes are not monkeys.Some monkeys live on the ground, while others live in trees.Different monkey species eat a variety of foods, such as fruit, insects, flowers, leaves and reptiles.Most monkeys have tails.Groups of monkeys are known as a ‘tribe’, ‘troop’ or ‘mission’.The Pygmy Marmoset is the smallest type of monkey, with adults weighing between 120 and 140 grams.The Mandrill is the largest type of monkey, with adult males weighing up to 35 kg.Capuchin monkeys are believed to be one of the smartest New World monkey species. They have the ability to use tools, learn new skills and show various signs of self-awareness.Spider monkeys get their name because of their long arms, legs and tail.The monkey is the 9th animal that appears on the Chinese zodiac, appearing as the zodiac sign in 2016.",
    wikipedia: "https://en.wikipedia.org/wiki/Monkey",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Portrait_of_a_father.jpg/312px-Portrait_of_a_father.jpg",
  },
  {
    id: 8,
    name: "Piegon",
    habitat: "Towns and Cities",
    species: "Bird",
    description:
      "The domestic pigeon is a pigeon subspecies that was derived from the rock dove. The rock pigeon is the world's oldest domesticated bird. Mesopotamian cuneiform tablets mention the domestication of pigeons more than 5,000 years ago, as do Egyptian hieroglyphics.",
    wikipedia: "https://en.wikipedia.org/wiki/Domestic_pigeon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Homing_pigeon.jpg/298px-Homing_pigeon.jpg",
  },
  {
    id: 9,
    name: "Zebra",
    habitat: "Grasslands",
    species: "Mammal",
    description:
      "Zebras are African equines with distinctive black-and-white striped coats. There are three extant species: the Grévy's zebra, plains zebra, and the mountain zebra. Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae.",
    wikipedia: "https://en.wikipedia.org/wiki/Zebra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/320px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg",
  },
  {
    id: 10,
    name: "Dog",
    habitat:
      "deserts, grasslands, forests, rain forests, coastal regions and arctic zones",
    species: "Mammal",
    description:
      "The domestic dog is a domesticated form of wolf. The dog descended from an ancient, extinct wolf, with the modern grey wolf being the dog's nearest living relative. The dog was the first species to be domesticated by hunter–gatherers over 15,000 years ago, before the development of agriculture.",
    wikipedia: "https://en.wikipedia.org/wiki/Dog",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wilde_huendin_am_stillen.jpg/320px-Wilde_huendin_am_stillen.jpg",
  },
  {
    id: 11,
    name: "Donkey",
    habitat: "Desert",
    species: "Mammal",
    description:
      "The donkey is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.",
    wikipedia: "https://en.wikipedia.org/wiki/Donkey",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Baudet.jpg/320px-Baudet.jpg",
  },
  {
    id: 12,
    name: "Kangaroo",
    habitat: "Forest, Woodlands, Plains",
    species: "Mammal",
    description:
      "The kangaroo is a marsupial from the family Macropodidae. In common use the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo. Kangaroos are indigenous to Australia and New Guinea.",
    wikipedia: "https://en.wikipedia.org/wiki/Kangaroo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG/320px-Kangaroo_Australia_01_11_2008_-_retouch.JPG",
  },
  {
    id: 13,
    name: "Owl",
    habitat: "Trees",
    species: "Bird",
    description:
      "Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.",
    wikipedia: "https://en.wikipedia.org/wiki/Owl",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cross-eyed_owl.jpg/320px-Cross-eyed_owl.jpg",
  },
  {
    id: 14,
    name: "Horse",
    habitat: "Planes",
    species: "Mammal",
    description:
      "The horse is a domesticated odd-toed ungulate mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.",
    wikipedia: "https://en.wikipedia.org/wiki/Horse",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Horse-and-pony.jpg/320px-Horse-and-pony.jpg",
  },
  {
    id: 15,
    name: "Giraffe",
    habitat: "Grasslands",
    species: "Mammal",
    description:
      "The giraffe is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies.",
    wikipedia: "https://en.wikipedia.org/wiki/Giraffe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Giraffe_Walking_Square%2C_flip.jpg/231px-Giraffe_Walking_Square%2C_flip.jpg",
  },
  {
    id: 16,
    name: "Rabbit",
    habitat: "Forests, Grasslands",
    species: "Mammal",
    description:
      "Rabbits are small mammals in the family Leporidae of the order Lagomorpha. Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the seven types of cottontail. ",
    wikipedia: "https://en.wikipedia.org/wiki/rabbit",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/What%27s_Up_Doc.jpg/320px-What%27s_Up_Doc.jpg",
  },
  {
    id: 17,
    name: "Cat",
    habitat: "Tropical Rain Forests",
    species: "Mammal",
    description:
      "The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. ",
    wikipedia: "https://en.wikipedia.org/wiki/Cat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/320px-Kittyply_edit1.jpg",
  },
  {
    id: 18,
    name: "Bear",
    habitat: "Forest",
    species: "Mammal",
    description:
      "Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. ",
    wikipedia: "https://en.wikipedia.org/wiki/Bear",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bear_Alaska_%283%29.jpg/279px-Bear_Alaska_%283%29.jpg",
  },
  {
    id: 19,
    name: "Wolf",
    habitat: "Tundra, Woodlands, Forests, Grasslands, Deserts",
    species: "Mammal",
    description:
      "The wolf, also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. More than thirty subspecies of Canis lupus have been recognized, and gray wolves, as colloquially understood, comprise non-domestic/feral subspecies.",
    wikipedia: "https://en.wikipedia.org/wiki/Wolf",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Black_and_White_Wolves.jpg/282px-Black_and_White_Wolves.jpg",
  },
];

export default animals;
