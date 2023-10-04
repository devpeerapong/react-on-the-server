import JoyLink from "@mui/joy/Link";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Tooltip from "@mui/joy/Tooltip";

/**
 *
 * @param {object} props
 * @param {Array<import("../api").Article>} props.data
 */
export function ArticleList({ data }) {
  return (
    <List size="lg">
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <JoyLink
              level="h2"
              color="primary"
              fontWeight="900"
              href={`/${item.id}`}
            >
              {item.title}
            </JoyLink>
            <Tooltip
              arrow
              title={new Date(item.createdAt).toLocaleTimeString()}
            >
              <Typography
                display="inline-block"
                level="body-sm"
                textColor="text.tertiary"
              >
                {new Date(item.createdAt).toDateString()}
              </Typography>
            </Tooltip>
          </ListItemContent>
        </ListItem>
      ))}
    </List>
  );
}
