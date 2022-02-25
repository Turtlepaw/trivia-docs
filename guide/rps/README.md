<style scoped>
.emoji-container {
	display: inline-block;
}

.emoji-container .emoji-image {
	width: 1.375rem;
	height: 1.375rem;
	vertical-align: bottom;
	margin-right: 6px;
}
</style>

# Rock Paper Scissors

Rock paper scissors is a simple game played with buttons!

<DiscordMessages>
	<DiscordMessage profile="bot">
		<template #interactions>
			<DiscordInteraction profile="user" :command="true">rps</DiscordInteraction>
		</template>
					<template #embeds>
			<DiscordEmbed
				border-color="#5865f2"
				embed-title="The game has started!"
				author-name="Powered by Gamecord.js"
				author-icon="https://cdn.discordapp.com/emojis/946191137645940806.webp?quality=lossless"
				author-url="https://gamecord.js.org/"
			>
				The RPS game has started! Please click a button.
			</DiscordEmbed>
		</template>
		<template #actions>
			<DiscordButtons>
				<DiscordButton>
						<span class="emoji-container">
			<img class="emoji-image" title="rock" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/282/rock_1faa8.png" alt="" />
		</span>
				Rock
				</DiscordButton>
				<DiscordButton>
						<span class="emoji-container">
			<img class="emoji-image" title="paper" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/282/page-facing-up_1f4c4.png" alt="" />
		</span>
				Paper
				</DiscordButton>
				<DiscordButton>
						<span class="emoji-container">
			<img class="emoji-image" title="scissors" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/248/scissors_2702.png" alt="" />
		</span>
				Scissors
				</DiscordButton>
			</DiscordButtons>
		</template>
	</DiscordMessage>
</DiscordMessages>

<!-- eslint-skip -->

```js
    //Using slash commands
    await new Gamecordjs.RPS({
        //You can add some options here
        RockButton: {
            label: "Rock",
            style: "BLURPLE", //If you change the style it might look really weird!
            emoji: "🪨"
        },
        //You can also add `ScissorButton` and `PaperButton`
        //...
    }, {
        //Here you can set your custom embeds'
        WinMessage: new Gamecordjs.Payload({
            content: `You won {{playerMention}}!`,
            embeds: [
                new Gamecordjs.Embed() //You can only use the gamecord Embed class.
                .setTitle(`Won!`)
            ]
            //More payload options
            //...
        })
        //You can also have `LostMessage`, `TieMessage`, and `StartGameMessage`
        //...
    }).start(interaction.channel, interaction, true);
```