import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./component/presentation";

let data =
    {
        "details": {
            "copyright": true,
            "author": "Maifee Ul Asad",
            "short_name": "MUA",
            "time_stamp": Date.now(),//1588592791100
            "thank_you": true,
            "question": true,
            "source": "maifeeulasad.github.io"
        },
        "slides": [
            {
                "title": "title 0",
                "body": [
                    {
                        "type": "img",
                        "content": "https://avatars1.githubusercontent.com/u/29339330?s=460&u=ffa51001d62c8b7111e13e87d86b77c67a0f4b3e&v=4",
                        "alt": "my github profile image",
                    },
                    {
                        "type": "link",
                        "content": "https://avatars1.githubusercontent.com/u/29339330?s=460&u=ffa51001d62c8b7111e13e87d86b77c67a0f4b3e&v=4",
                        "alt": "github image hyperlink",
                    },
                    "1",
                    "22",
                    "333",
                    "4444",
                    "55555",
                    "666666",
                    "7777777",
                    "88888888",
                    "999999999",
                    "1",
                    "22",
                    "333",
                    "4444",
                    "55555",
                    "666666",
                    "7777777",
                    "88888888",
                    "999999999",
                    "1",
                    "22",
                    "333",
                    "4444",
                    "55555",
                    "666666",
                    "7777777",
                    "88888888",
                    "999999999",
                ],
            },
            {
                "title": "title 1",
                "body": [
                    "1",
                ],
            },
            {
                "title": "title 2",
                "body": [
                    "2",
                    "22",
                ],
            },
            {
                "title": "title 3",
                "body": [
                    "3",
                    "33",
                    "333",
                ],
            },
            {
                "title": "title something",
                "body": [
                    {
                        "type": "iframe",
                        "content": "https://docs.google.com/forms/d/e/1FAIpQLSfMnOzgL4MIUWQXu1-EgG_-dTeYtGQXOTVDZhvq0JDehDFn3A/viewform?embedded=true",
                        "alt": "alt",
                        "title": "tile",
                    },
                    "1",
                    "22",
                    "333",
                    "4444",
                    "55555",
                    "666666",
                    "7777777",
                    "88888888",
                    "999999999",
                ],
            }
        ],
    };

ReactDOM.render(
  <React.StrictMode>
      <Index data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);
