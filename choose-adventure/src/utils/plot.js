const plot = [
  {
    id: 0,
    title: "Welcome to Camp Slaughter!",
    content:
      "You've just arrived at summer camp and are ready to have a great time. OR ARE YOU?!",
    choices: [
      {
        text: "Get off the Bus &amp; Get Your Cabin Assignment",
        target: 1,
      }
    ],
  },
  {
    id: 1,
    title: "Chapter 1",
    content:
      "Once you arrive at camp, you get to the cabins where everyone is checking in and try to get your cabin, but notice your name isn’t on the list... You try to talk to the camp leaders, but they’re busy and are ignoring you - so you find a bunk in an empty cabin at the edge of camp. You throw your stuff on your bed and head out to the first activity",
    choices: [
      {
        text: "Go talk to the counselor",
        target: 2,
      },
      {
        text: "Try to Find Your Cabin Alone",
        target: 101,
      }
    ],
  },
  {
    id: 2,
    title: "Chapter 2",
    content:
      "Tug of war - teams are chosen, her team wins, but nobody high fives her once they win. This upset her ? confusion",
    choices: [
        {
        text: "Try to pull with all of your might",
         target: ,
    
        },
        {
        text: "Let go of rope",
        target: ,
        }

    ],
  },
  {
    id: 3,
    title: "Chapter 3",
    content:
      "It's lunch time. You're not hungry though. You're hands are hurting and you're upset and wondering why no one congratulated you on the big win... after all, you carried the team to victory... You grab your sloppy joes from the cafeteria - choose where to sit:",
    choices: [
        {
            text: "Sit with the winning team",
            target: 201,
        },
        {
            text: "Sit Alone",
            target: 4,
        }
    ],
  },
  {
    id: 4,
    title: "Chapter 4",
    content:
      "Hi, I'm Ezra, --conversation here-- Do you wanna hang out with me? Or are you going swimming with everyone else?",
    choices: [
        {
            text: "Hang out with Ezra",
            target: 5,
        },
        {
            text: "Go swimming",
            target: 6,
        }
    ],
  },
  {
    id: 5,
    title: "Chapter 5",
    content:
      "Ezra and Jesse go for a walk",
    choices: [
        {
            text:"",
            target: ,
        }
    ],
  },
  {
      id: 6,
      title: "Chapter 5.5",
      content: "Ezra, Jesse and the rest of the campers go swimming ",
      choices: [
          {
              text: "",
              target: ,
          },
      ],
  },
  {
    id: 7,
    title: "Chapter 8",
    content: "Bonfire time --  Bonfire tells campfire story -- They get too scared and go back to their cabin - get shenanigan-sy and go to bed. Ezra and Jesse are going to be bunkmates from now on. Ezra got there late and is the bunkmate to Jesse",
    choices: [
        {
            text: "Tell own story",
            target: 202,

        },
        {
            text: "Elbow Ezra, get them to tell story",
            target: 203,
        }
    ],
  },
  {
    id: 8,
    title: "Chapter 9",
    content: "Arrive at first activity - You don’t see the storyteller from the last night (Artie), camp counselor says “Artie is missing, don’t be alarmed”... 'were sending everyone to their cabins for the morning while the counselors search'",
    choices: [
        {
            text: "Search for Artie?",
            target: ,
        },
        {
            text: "Go for a Walk",
            target: ,
        }
    ], 
  },
  {
    id: 9,
    title: "Chapter 10",
    content: "Jesse finds Artie’s body by the river - the same river they were walking by the day before and freaks out. Calls to Ezra, who shows up with Artie walking alongside him. Ezra is unphased. Ezra explains “I’m a medium, anyone who spends time with me experiences this 6th sense… kind of skirts the question, this place is haunted",
    choices: [
        {
            text: "Jesse Answer/Reaction 1",
            target: ,
        },
        {
            text: "Jesse Answer/Reaction 2",
            target: ,
        }
    ], 
  },
  {
      id: 10,
      title: "Chapter 11",
      content: "(dream sequence)",
      choices: [
          {
              text: "wake up",
              target: ,
          }

      ],
  },
  {
    id: 11,
      title: "Chapter 12",
      content: "**Wakes up startled** You wake up in the cabin, she had a dream she was drowning, she’s gasping, choking for air. Did we actually find Artie’s body? Sits up and Artie and Ezra are in the cabin playing chess.",
      choices: [
          {
              text: "Talk to the Artie &amp; Ezra",
              target: ,
          },
          {
            text: "Demand Answers",
            target: 205,
          }

      ],
  },
  {
    id: 12,
    title: "Chapter 13",
    content: "another camp counselor, Dalonte has gone missing. Head of Camp, closes camp, gives backstory, people went missing a few decades ago, and now it’s happening again. Go back to your cabins, pack your shit up, we’re sending you guys home a week early.",
    choices: [
      {
        text: "head back to the cabin",
        target: 13,
      }
    ],
  },
  {
    id: 13,
    title: "Chapter 13",
    content: "Where are Ezra and Artie?",
    choices:[
      {
        text: "Search for them",
        target: ,
      },
      {
        text: "Tell a camp counselor",
        target: 301,
      },
    ]
  },
  {
    id: 14,
    title: "Chapter 14 - The search for Ezra and Artie",
    content: "Search around camp for Ezra and Artie",
    choices: [
      {
        text: "check mess hall",
        target: 15,
      },
      {
        text: "check cafeteria",
        target: 15,
      },
      {
        text: "check girls bunk",
        target: 15,
      },
      {
        text: "check gymnasium",
        target: 15,
      }
    ],
  },
  {
    id: 15,
    title: "Chapter 14.2",
    content: "There is no one there...",
    choices: [],
  },
  {
    id: 16,
    title: "Chapter 15",
    content: "gets on the bus, The bus is running, everyone’s stuff is on the bus, no one is on the bus, and one is around. Gets off the bus to head to the main area and hears a voice she recognizes, and blacks out. ",
    choices: [],
  },
  {
    id: 17,
    title: "Chapter 16",
    content: "(at front of camp) gets on the bus, The bus is running, everyone’s stuff is on the bus, no one is on the bus, and one is around. Gets off the bus to head to the main area and hears a voice she recognizes, and blacks out. ",
    choices: [],
  },
  {
    id: 18,
    title: "Chapter 17",
    content: "(wakes up from black out) she wakes up in a canoe tied up, in a canoe. (ezra and artie are on the shore - they walk on water towards the canoes and go over to jesse and give jesse the option to kill the rest of the campers. Save yourself and kill the campers or watch Ezra and Artie drown all of the campers and then be drowned herself, which was a premonition from her dream before) ",
    choices: [
      {
        text: "Save self",
        target: 19,
      },
      {
        text: "Save others",
        target: 20,
      },
    ],
  },
  {
    id: 19,
    title: "Chapter 18",
    content: "she materializes and people see her for the first time. She drowns each canoe, the only things around to hear the screams of the drawing children are the animals ",
    choices: [],
  },
  {
    id: 20,
    title: "Chapter 19",
    content: "(she drowns, wakes up from the dream and starts back in the cabin where they are playing chess after artie’s death.",
    choices: [],
  },
  {
    id: 100,
    title: "The end!",
    content: "You're lazy and got murdered.",
    choices: [],
  },
  {
    id: 101,
    title: "The end!",
    content: "You suck and died.",
    choices: [],
  },
  {
    id: 201,
    title: "Chapter 3.5",
    content: "You go to sit down with the winning team when someone yells 'Jessie!' - you turn to go sit down as a beautiful blonde girl runs over to hug her friends and take your seat. 'So much for having such a popular name', you think to yourself",
    choices: [
        {
            text: "Sit Alone",
            target: 4,
        }
    ]
  },
  {
    id: 202,
    title: "Chapter 8.25",
    content: "As soon as you clear your throat to start talking, you stand up, knees shaking, and feel Ezra pull you down and gently say 'maybe let someone else go... you seem like too much of a scaredy cat'",
    choices: [
        {
            text: "Sit back down",
            target: 4,
        }
    ]
  },
  {
    id: 203,
    title: "Chapter 8.5",
    content: "You nudge Ezra to tell a story - 'I BET YOU WON'T TELL A STORY... I triple dog dare you to...' Ezra gets ready to tell his story when Aaron the camp counselor loudly announces it's time for some campfire songs." ,
    choices: [
        {
            text: "Roll your eyes, sneak off to the cabin with Ezra",
            target: 4,
        }
    ]
  },
  {
      id: 204,
      title: "Chapter 12.5",
      content: " - she runs back to the cabin either way and jumps into bed and tries to convince herself it was a dream(if she doesn’t agree) (or falls asleep if she embraces it) ?",
      choices: [
          {
              text: "Fall Asleep",
              target: ,
          }
      ]
  },
  {
    
      id: 205,
      title: "Chapter 10.5",
      content: " if she “embraced it” - she goes over and knocks over the chess game and demands answers or asks questions about the situation",
      choices: [
          {
              text: "Fall Asleep",
              target: ,
          }
      ]
  },
  {
    id: 301,
    title: "OOF",
    content: "You decide to go tell a camp counselor that Ezra and Artie are missing. As soon as you open the door to your cabin to the outside, you are knocked unconscious by a canoe paddle. Never to awake again.",
    choices: [],
  }
  
];

export default plot;
