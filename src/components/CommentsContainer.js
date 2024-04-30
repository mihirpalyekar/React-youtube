import React from 'react'
import Comment from './Comment';
import CommentsList from './CommentsList';

const commentsData = [
  {
    name: "Mihir Palyekar",
    text: "Lorem Impsum",
    replies: [
      {
        name: "Mihir Palyekar",
        text: "Lorem Impsum",
        replies: [
          {
            name: "Mihir Palyekar",
            text: "Lorem Impsum",
            replies: [],
          },
          {
            name: "Mihir Palyekar",
            text: "Lorem Impsum",
            replies: [
              {
                name: "Mihir Palyekar",
                text: "Lorem Impsum",
                replies: [],
              },
              {
                name: "Mihir Palyekar",
                text: "Lorem Impsum",
                replies: [],
              },
              {
                name: "Mihir Palyekar",
                text: "Lorem Impsum",
                replies: [
                  {
                    name: "Mihir Palyekar",
                    text: "Lorem Impsum",
                    replies: [],
                  },
                  {
                    name: "Mihir Palyekar",
                    text: "Lorem Impsum",
                    replies: [],
                  },
                  {
                    name: "Mihir Palyekar",
                    text: "Lorem Impsum",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Mihir Palyekar",
        text: "Lorem Impsum",
        replies: [],
      },
      {
        name: "Mihir Palyekar",
        text: "Lorem Impsum",
        replies: [],
      },
      {
        name: "Mihir Palyekar",
        text: "Lorem Impsum",
        replies: [],
      },
    ],
  },
  {
    name: "Mihir Palyekar",
    text: "Lorem Impsum",
    replies: [],
  },
  {
    name: "Mihir Palyekar",
    text: "Lorem Impsum",
    replies: [],
  },
  {
    name: "Mihir Palyekar",
    text: "Lorem Impsum",
    replies: [
      {
        name: "Mihir Palyekar",
        text: "Lorem Impsum",
        replies: [
          {
            name: "Mihir Palyekar",
            text: "Lorem Impsum",
            replies: [],
          },
          {
            name: "Mihir Palyekar",
            text: "Lorem Impsum",
            replies: [
              {
                name: "Mihir Palyekar",
                text: "Lorem Impsum",
                replies: [],
              },
              {
                name: "Mihir Palyekar",
                text: "Lorem Impsum",
                replies: [
                  {
                    name: "Mihir Palyekar",
                    text: "Lorem Impsum",
                    replies: [
                      {
                        name: "Mihir Palyekar",
                        text: "Lorem Impsum",
                        replies: [
                          {
                            name: "Mihir Palyekar",
                            text: "Lorem Impsum",
                            replies: [
                              {
                                name: "Mihir Palyekar",
                                text: "Lorem Impsum",
                                replies: [
                                  {
                                    name: "Mihir Palyekar",
                                    text: "Lorem Impsum",
                                    replies: [
                                      {
                                        name: "Mihir Palyekar",
                                        text: "Lorem Impsum",
                                        replies: [
                                          {
                                            name: "Mihir Palyekar",
                                            text: "Lorem Impsum",
                                            replies: [
                                              {
                                                name: "Mihir Palyekar",
                                                text: "Lorem Impsum",
                                                replies: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Mihir Palyekar",
                text: "Lorem Impsum",
                replies: [],
              },
            ],
          },
          {
            name: "Mihir Palyekar",
            text: "Lorem Impsum",
            replies: [],
          },
        ],
      },
      {
        name: "Mihir Palyekar",
        text: "Lorem Impsum",
        replies: [],
      },
      {
        name: "Mihir Palyekar",
        text: "Lorem Impsum",
        replies: [],
      },
    ],
  },
  {
    name: "Mihir Palyekar",
    text: "Lorem Impsum",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer