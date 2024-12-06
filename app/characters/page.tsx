import Link from "next/link";
import styles from "./../page.module.css";

export default async function CharacterList() {
    const query = `
        query {
            Media(id: 269) {
            id
            title {
                romaji
                english
                native
            }
            description
            episodes
            season
            genres
            }
        }
    `;

    const data = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })
    const anime = await data.json()
    console.log('anime', anime)

    return (
        <div className={styles.page}>
            List of characters for {anime.data.Media.title.native} ({anime.data.Media.title.english})
            <Link href="/">Go back</Link>
        </div>
    );
}
