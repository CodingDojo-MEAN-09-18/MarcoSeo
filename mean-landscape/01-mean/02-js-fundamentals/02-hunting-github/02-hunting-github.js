// 1 hour

// {
//     "login": "MikeHannon",
//     "id": 7180431,
//     "avatar_url": "https://avatars.githubusercontent.com/u/7180431?v=3",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/MikeHannon",
//     "html_url": "https://github.com/MikeHannon",
//     "followers_url": "https://api.github.com/users/MikeHannon/followers",
//     "following_url": "https://api.github.com/users/MikeHannon/following{/other_user}",
//     "gists_url": "https://api.github.com/users/MikeHannon/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/MikeHannon/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/MikeHannon/subscriptions",
//     "organizations_url": "https://api.github.com/users/MikeHannon/orgs",
//     "repos_url": "https://api.github.com/users/MikeHannon/repos",
//     "events_url": "https://api.github.com/users/MikeHannon/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/MikeHannon/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Mike Hannon",
//     "company": null,
//     "blog": null,
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "public_repos": 12,
//     "public_gists": 0,
//     "followers": 44,
//     "following": 8,
//     "created_at": "2014-04-05T00:21:45Z",
//     "updated_at": "2015-04-14T23:23:54Z"
//   }

$(document).ready(function() {
    $.get("https://api.github.com/users/seeck3", displayName);

    function displayName (data) {
        $("button").click(function() {
            $(this).after(`<h1>${data.login}</h1>`)
        })
    };
});