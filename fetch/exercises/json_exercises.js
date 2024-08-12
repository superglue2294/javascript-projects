//! Which of the following three code snippets is correct JSON syntax? Why are the other two options incorrect?

// a.

{
    type: "dog",
        name: "Bernie",
            age: 3
}

// b.

{
    "type": "dog",
        "name": "Bernie",
            "age": 3
}

// c.

{
    "type": 'dog',
        "name": 'Bernie',
            "age": 3
}

// ANSWER: b is the correct answer because the key and value pairs are both in double quotation marks for string. Keys must have double quotation marks, so a cannot be the answer. Values must have double quation marks, so c cannot be the answer.

//! Which of the following three code snippets is correct JSON? Why are the other two options incorrect?

// a.

{
    "animals": [
        {
            "type": "dog",
            "name": "Bernie",
            "age": 3
        },
        {
            "type": "cat",
            "name": "Draco",
            "age": 2
        }
    ]
}

// b.

{
    [
        {
            "type": "dog",
            "name": "Bernie",
            "age": 3
        },
        {
            "type": "cat",
            "name": "Draco",
            "age": 2
        }
    ]
}

// c.

[
    {
        "type": "dog",
        "name": "Bernie",
        "age": 3
    },
    {
        "type": "cat",
        "name": "Draco",
        "age": 2
    }
]

// The answer is a because it has everything required. A key of animals (in double quotes) with a value of an array. Inside the array, everything matches, both key and values (of strings) are in double quotes. The answer cannot be b because there is no key for the array. And the answer cannot be c because it also needs a key.