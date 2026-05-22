import { ExploreHeadline } from "../components/ExploreHeadIine";
import { PageContainer } from "@/shared/components/ui";
import { ExploreBook } from "../components/ExploreBook";
import { FixedSizeList as List } from "react-window";
import {
  titles,
  books,
  readChallenges,
  QuotePostsData,
  categories,
} from "../mocks";
import { ExploreCategory } from "../components/ExploreCategory";
import { ExploreReadingChallenge } from "../components/ExploreReadingChallenges";
import { ExploreQuotes } from "../components/ExploreQuotes";

export function ExplorePage() {
  const headLines = titles.map((heading, index) => {
    return index === 0 ? (
      <>
        <ExploreHeadline
          title={heading.headLine}
          isSeeAll={heading["translation.seeAll"]}
        />
        <List
          layout="horizontal"
          height={350}
          itemCount={books.length}
          itemSize={200}
          width={1000}
        >
          {({ index, style }) => {
            const book = books[index];
            return (
              // my Component
              <div style={style}>
                <div className="px-2">
                  <ExploreBook
                    bookNumber={index + 1}
                    title={book.title}
                    image={book.image}
                    rate={book.rate}
                    writer={book.writer}
                  />
                </div>
              </div>
            );
          }}
        </List>
      </>
    ) : index === 1 ? (
      <>
        <ExploreHeadline
          title={heading.headLine}
          isSeeAll={heading["translation.seeAll"]}
        />
        <List
          layout="horizontal"
          height={300}
          itemCount={readChallenges.length}
          itemSize={400}
          width={1000}
        >
          {({ index, style }) => {
            const card = readChallenges[index];
            return (
              // my Component
              <div style={style}>
                <div className="px-2">
                  <ExploreReadingChallenge
                    icon={card.icon}
                    iconName={card.iconName}
                    pepJoined={card.pepjoined}
                    year={card.year ?? 2026}
                    title={card.title}
                    description={card.description}
                    booksRead={card.booksRead}
                    booksGoal={card.booksGoal}
                    colors={{
                      bgCard: card.styles.bgCard,
                      badgeBg: card.styles.badgeBg,
                      iconColor: card.styles.btnBg,
                      btnBg: card.styles.btnBg,
                      btnText: card.styles.btnText,
                    }}
                  />
                </div>
              </div>
            );
          }}
        </List>
      </>
    ) : index === 2 ? (
      <>
        <ExploreHeadline
          title={heading.headLine}
          isSeeAll={heading["translation.seeAll"]}
        />
        <List
          height={360}
          itemCount={QuotePostsData.length}
          itemSize={170}
          width={1000}
        >
          {({ index, style }) => {
            const Quote = QuotePostsData[index];
            return (
              // my Component
              <div style={style}>
                <div className="px-2">
                  <ExploreQuotes
                    user={{
                      name: Quote.user.name,
                      avatarUrl: Quote.user.avatarUrl,
                      activity: Quote.user.activity,
                    }}
                    body={Quote.body}
                    likes={Quote.likes}
                    comments={Quote.comments}
                  />
                </div>
              </div>
            );
          }}
        </List>
      </>
    ) : (
      <>
        <ExploreHeadline
          title={heading.headLine}
          isSeeAll={heading["translation.seeAll"]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {categories.map((categ, index) => {
            return (
              <div key={index} className="px-2">
                <ExploreCategory
                  icon={categ.icon}
                  iconName={categ.iconName}
                  category={categ.catName}
                  iconBackColor={{
                    iconBg: categ.styles.iconBg,
                    iconText: categ.styles.iconText,
                    hoverText: categ.styles.hoverText,
                  }}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  });
  return <PageContainer>{headLines}</PageContainer>;
}
