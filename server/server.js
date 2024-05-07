/* eslint-disable no-undef */
// server.js

const express = require("express");
const youtubei = require("youtubei");
const cors = require("cors");
const YouTube = require("youtube-sr").default;
const { Client } = require("youtubei");
const { Innertube, UniversalCache, YTNodes } = require("youtubei.js");

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://192.168.1.103:5173",
      "https://react-youtube-project.vercel.app",
      "https://youtube-project-beta.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })

);


let yt = new Client();

let youtube;

(async () => {
  youtube = await Innertube.create({
    generate_session_locally: true,
    cache: new UniversalCache(false),
  });
})();

app.get("/api/trending", async (req, res) => {
  try {
    const trending = await youtube?.getTrending();

    res.json(trending?.videos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching trending results");
  }
});
// app.get("/api/trending/shorts", async (req, res) => {
//   try {
//     const channel = await youtube?.getChannel("UC9ahzg5NE2d9jLgxdcqciJA");

//   const shorts = await channel?.getShorts();

//     res.json(shorts.videos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching trending results");
//   }
// });

app.get("/api/feed", async (req, res) => {
  try {
    const { page } = req.query;
    const videos = await yt.search("trending", {
      type: "video", // video | playlist | channel | all
    });

    if (page > 0) {
      const nextVideos = await videos?.next(page);
    }

    const responseData = videos?.items.map((video) => {
      return {
        id: video.id,
        title: video.title,
        thumbnail: video.thumbnails[0].url,
        channelId: video.channel.id,
        channelName: video.channel.name,
        channelPhoto: video.channel.thumbnails[0].url,
        duration: video.duration,
        views: video.viewCount,
        published: video.uploadDate,
      };
    });

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching search results");
  }
});
app.get("/api/music", async (req, res) => {
  try {
    const trendingKeywords = [
      "trending music",
      "top music",
      "popular music",
      "trending song",
    ];

    // Loop through keywords and perform searches
    let allSearchResults = [];
    for (const keyword of trendingKeywords) {
      const searchResults = await youtube?.search(keyword, {
        type: "video",
      });

      allSearchResults = allSearchResults.concat(searchResults?.results); // Combine results
    }

    const removeShortVideos = allSearchResults.filter(
      (video) => video?.duration?.seconds > 60
    );

    res.json(removeShortVideos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching search results");
  }
});

app.get("/api/gaming", async (req, res) => {
  try {
    const gamingVideos = await youtube?.search("gaming");

    res.json(gamingVideos?.videos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching search results");
  }
});
app.get("/api/film", async (req, res) => {
  try {
    const filmVideos = await youtube?.search("films");

    res.json(filmVideos?.videos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching search results");
  }
});

app.get("/api/sports", async (req, res) => {
  try {
    const trendingKeywords = [
      "football",
      "cricket",
      "hockey",
      "rugby",
      "tennis",
    ];

    // Loop through keywords and perform searches
    let allSearchResults = [];
    for (const keyword of trendingKeywords) {
      const searchResults = await youtube?.search(keyword, {
        type: "video",
      });

      allSearchResults = allSearchResults.concat(searchResults?.results); // Combine results
    }

    const removeShortVideos = allSearchResults.filter(
      (video) => video?.duration?.seconds > 60
    );

    res.json(removeShortVideos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching search results");
  }
});

app.get("/api/search-suggestions", async (req, res) => {
  try {
    const { q } = req.query;
    let searchSuggestions;
    if (q.length > 0) {
      searchSuggestions = await youtube?.getSearchSuggestions(q);
    }

    const limitSuggestions = searchSuggestions?.slice(0, 11);

    res.json(limitSuggestions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
app.get("/api/search", async (req, res) => {
  try {
    const { q } = req.query;
    let searchData;
    if (q.length > 0) {
      searchData = await youtube?.search(q);
    }

    res.json(searchData.videos);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/api/getvideoinfo/:videoId", async (req, res) => {
  try {
    const { videoId } = req.params;

    const info = await youtube?.getInfo(videoId);

    res.json(info);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/api/comments/:videoId", async (req, res) => {
  try {
    const { videoId } = req.params;

    const comment_section = await youtube?.getComments(videoId);

    let commentsData = [];

    var commentsCount = comment_section.header?.count?.text;

    for (const thread of comment_section.contents) {
      const comment = thread.comment;

      if (comment) {
        let commentData = {
          isPinned: comment.is_pinned,
          isHasReplies: thread.has_replies,
          isMember: comment.is_member,
          replyCount: comment.reply_count,
          author: comment.author.name,
          authorImage: comment.author.thumbnails[0].url,
          published: comment.published,
          content: comment.content.toString(),
          likes: comment.vote_count,
          replies: [],
        };

        if (thread.has_replies) {
          let commentThread = await thread?.getReplies();

          while (true) {
            for (const reply of commentThread?.replies || []) {
              let replyData = {
                author: reply.author.name,
                authorImage: reply.author.thumbnails[0].url,
                published: reply.published,
                content: reply.content.toString(),
                likes: reply.vote_count,
              };
              commentData.replies.push(replyData);
            }

            try {
              commentThread = await commentThread?.getContinuation();
            } catch {
              break;
            }
          }
        }

        commentsData.push(commentData);
      }
    }

    res.json({ comments: commentsData, totalComments: commentsCount });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/api/channel/:channelId", async (req, res) => {
  const { channelId } = req.params;
  const channel = await yt?.getChannel(channelId);

  const responseData = {
    name: channel.name,
    thumbnail:
      channel.thumbnails && channel.thumbnails[2]
        ? channel.thumbnails[2].url
        : channel.thumbnails[0].url,
    banner: channel.banner[0].url,
    mobileBanner: channel.mobileBanner[0].url,
    subscribers: channel.subscriberCount,
  };

  res.json(responseData);
});

app.get("/api/channel/:channelId/videos", async (req, res) => {
  const { channelId } = req.params;
  const { filter } = req.query;

  const channel = await youtube?.getChannel(channelId);

  const videos = await channel.getVideos();
  const filterVideos = await videos?.applyFilter(filter);

  res.json(filterVideos.videos);
});

app.get("/api/channel/:channelId/shorts", async (req, res) => {
  try {
    const { channelId } = req.params;
    const { filter } = req.query;

    const channel = await youtube?.getChannel(channelId);

    const shorts = await channel?.getShorts();

    const filterShorts = await shorts?.applyFilter(filter);

    res.json(filterShorts.videos);
  } catch (error) {
    console.error(error);
    res.status(500).send("no shorts found");
  }
});

app.get("/api/channel/:channelId/posts", async (req, res) => {
  try {
    const { channelId } = req.params;

    const channel = await youtube?.getChannel(channelId);

    const posts = await channel?.getCommunity();

    res.json(posts.posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("no posts found");
  }
});

app.get("/api/trending/shorts", async (req, res) => {
  const channel = await youtube?.getChannel("UCX6OQ3DkcsbYNE6H8uQQuVA");

  const shorts = await channel?.getShorts();
  const filterShorts = await shorts?.applyFilter("Popular");

  res.json(filterShorts.videos);
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
