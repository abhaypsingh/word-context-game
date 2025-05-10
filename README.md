# Word Context Game - Contribution Guide

Thank you for your interest in contributing to the Word Context Game! This guide focuses on how to contribute to the `questions.json` file, which contains all the word puzzles used in the game.

## Table of Contents

- [Understanding the Game](#understanding-the-game)
- [Question Structure](#question-structure)
- [Progressive Difficulty Framework](#progressive-difficulty-framework)
- [Contribution Guidelines](#contribution-guidelines)
- [Examples by Difficulty Level](#examples-by-difficulty-level)
- [Testing Your Questions](#testing-your-questions)
- [Submitting Contributions](#submitting-contributions)

## Understanding the Game

The Word Context Game demonstrates how words derive meaning from context. Each question presents:
- A sentence containing an ambiguous word
- Four possible meanings for that word
- Only one meaning is correct in the specific context
- The other options are valid definitions of the word in different contexts

The goal is to help players (especially children ages 5-15 and language learners) develop contextual understanding of vocabulary.

## Question Structure

Each question in `questions.json` follows this structure:

```json
{
  "id": 1,
  "sentence": "The bat flew around the cave.",
  "highlightedWord": "bat",
  "options": [
    {
      "id": "a",
      "text": "A flying mammal",
      "isCorrect": true,
      "explanation": "In this context, 'bat' refers to the nocturnal flying mammal that uses echolocation to navigate."
    },
    {
      "id": "b",
      "text": "A wooden stick for hitting balls",
      "isCorrect": false,
      "explanation": "While 'bat' can refer to a sports implement, this meaning doesn't fit the context of flying in a cave."
    },
    {
      "id": "c",
      "text": "To hit or strike something",
      "isCorrect": false,
      "explanation": "Although 'bat' can be used as a verb meaning to hit, the sentence structure uses it as a noun that performs the action of flying."
    },
    {
      "id": "d",
      "text": "To flutter one's eyelashes",
      "isCorrect": false,
      "explanation": "While 'bat' can be used in the phrase 'bat your eyelashes,' this meaning doesn't fit in the context of the full sentence."
    }
  ]
}
```

## Progressive Difficulty Framework

To provide an engaging learning experience, questions should follow a progressive difficulty scale:

### Level 1: Beginner (Ages 5-8)
- Simple, common words with distinct meanings
- Short, straightforward sentences
- Clear contextual clues
- Familiar concepts and situations
- Limited vocabulary range

### Level 2: Elementary (Ages 8-10)
- Common words with multiple meanings
- Slightly longer sentences
- Good contextual clues but requires more attention
- Everyday situations
- Expanded vocabulary range

### Level 3: Intermediate (Ages 10-12)
- More advanced vocabulary with multiple meanings
- Longer sentences with more complex structure
- Subtler contextual clues
- More varied situations
- Introduction of idiomatic expressions

### Level 4: Advanced (Ages 12-15)
- Advanced vocabulary including academic words
- Complex sentences with multiple clauses
- Nuanced contextual clues
- Abstract concepts
- Idiomatic expressions and figurative language

### Level 5: Challenge (ESL Adults/Advanced Learners)
- Sophisticated vocabulary with subtle meaning distinctions
- Complex sentence structures
- Very subtle contextual clues
- Cultural references and advanced idioms
- Professional or specialized language

## Contribution Guidelines

When adding new questions, please follow these guidelines:

1. **Assign a difficulty level** using tags in the following format:
   ```json
   "difficulty": "L1-Beginner"
   ```

2. **Ensure variety**: Check existing questions to avoid duplication and ensure a good mix of word types (nouns, verbs, adjectives, etc.)

3. **Cultural sensitivity**: Avoid culturally specific references that might not be understood globally

4. **Clarity**: Make sure there is only one clearly correct answer in the given context

5. **Explanation quality**: Provide thorough explanations for both correct and incorrect options

6. **Age appropriateness**: Ensure content is appropriate for the target age group

7. **Language accuracy**: Double-check all definitions for accuracy

8. **Grammar and spelling**: Ensure all text is grammatically correct and properly spelled

## Examples by Difficulty Level

### Level 1: Beginner Example
```json
{
  "id": 101,
  "difficulty": "L1-Beginner",
  "sentence": "The big dog likes to run in the park.",
  "highlightedWord": "park",
  "options": [
    {
      "id": "a",
      "text": "An open space with grass and trees for people to enjoy",
      "isCorrect": true,
      "explanation": "In this context, 'park' refers to an outdoor space with grass where people and dogs can play and exercise."
    },
    {
      "id": "b",
      "text": "To leave a car in a specific place",
      "isCorrect": false,
      "explanation": "While 'park' can mean to stop and leave a vehicle somewhere, this meaning doesn't make sense with a dog running in it."
    },
    {
      "id": "c",
      "text": "To move a car into a stopped position",
      "isCorrect": false,
      "explanation": "Although 'park' can be a verb related to positioning a vehicle, the sentence uses it as a noun - a place where the dog runs."
    },
    {
      "id": "d",
      "text": "A gear position in a car that keeps it from moving",
      "isCorrect": false,
      "explanation": "While 'park' can refer to a gear setting in a vehicle, this doesn't fit with a dog running in it."
    }
  ]
}
```

### Level 3: Intermediate Example
```json
{
  "id": 301,
  "difficulty": "L3-Intermediate",
  "sentence": "Her story doesn't quite add up, so I'm skeptical.",
  "highlightedWord": "add up",
  "options": [
    {
      "id": "a",
      "text": "To make logical sense or be believable",
      "isCorrect": true,
      "explanation": "In this context, 'add up' is an idiom meaning that something seems logical or reasonable. The speaker is saying the story doesn't seem believable."
    },
    {
      "id": "b",
      "text": "To calculate a sum of numbers",
      "isCorrect": false,
      "explanation": "While 'add up' can mean to calculate a total, this mathematical meaning doesn't fit with a story and someone being skeptical."
    },
    {
      "id": "c",
      "text": "To increase gradually over time",
      "isCorrect": false,
      "explanation": "Although 'add up' can refer to things accumulating over time, this meaning doesn't make sense with someone being skeptical about a story."
    },
    {
      "id": "d",
      "text": "To combine several things together",
      "isCorrect": false,
      "explanation": "While 'add up' can mean to combine things, this literal meaning doesn't fit with the idiomatic use in the context of evaluating the truthfulness of a story."
    }
  ]
}
```

### Level 5: Challenge Example
```json
{
  "id": 501,
  "difficulty": "L5-Challenge",
  "sentence": "The professor's argument was sound, convincing most of the skeptics in the audience.",
  "highlightedWord": "sound",
  "options": [
    {
      "id": "a",
      "text": "Based on valid reasoning; logically robust",
      "isCorrect": true,
      "explanation": "In this context, 'sound' is an adjective describing the quality of the professor's reasoning—meaning it was logically valid, well-structured, and free from fallacies."
    },
    {
      "id": "b",
      "text": "Audible vibrations traveling through air",
      "isCorrect": false,
      "explanation": "While 'sound' commonly refers to audible vibrations, this meaning doesn't fit with describing an argument's quality and its ability to convince skeptics."
    },
    {
      "id": "c",
      "text": "To measure the depth of water",
      "isCorrect": false,
      "explanation": "Although 'sound' can be a verb meaning to measure depth, the sentence structure uses it as an adjective describing the quality of the argument."
    },
    {
      "id": "d",
      "text": "Healthy or in good condition",
      "isCorrect": false,
      "explanation": "While 'sound' can describe good health (as in 'sound mind and body'), in the context of an argument that convinced skeptics, it specifically refers to logical validity rather than general wellbeing."
    }
  ]
}
```

## Testing Your Questions

Before submitting new questions, please test them by:

1. Validating the JSON format using a tool like [JSONLint](https://jsonlint.com/)
2. Ensuring that only one option is marked as `isCorrect: true`
3. Reading the sentence and options to someone else to verify the clarity
4. Double-checking all explanations for accuracy and helpfulness

## Submitting Contributions

To contribute new questions:

1. Fork the repository
2. Add your questions to the `questions.json` file
3. Ensure you follow the progressive difficulty framework
4. Validate your JSON
5. Submit a pull request with a clear description of your additions

We appreciate your contributions to making this educational game more comprehensive and engaging!

---

## Question Set Balance

Aim for a balanced distribution of questions across difficulty levels:

| Difficulty Level        | Target Percentage | 
|-------------------------|-------------------|
| L1-Beginner             | 20%               |
| L2-Elementary           | 25%               |
| L3-Intermediate         | 25%               |
| L4-Advanced             | 20%               |
| L5-Challenge            | 10%               |

Also, strive for a balanced distribution of word types:

| Word Type               | Target Percentage |
|-------------------------|-------------------|
| Nouns                   | 30%               |
| Verbs                   | 30%               |
| Adjectives              | 20%               |
| Phrases/Idioms          | 15%               |
| Other (adverbs, etc.)   | 5%                |

Thank you for helping improve the Word Context Game!
