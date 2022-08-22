import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const products = [
  {
    id: uuid(),
    name: "Building 001",
    imageUrl: "/static/images/products/product_6.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "Building 002",
    imageUrl: "/static/images/products/product_6.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "Building 003",
    imageUrl: "/static/images/products/product_6.png",
    updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(),
    name: "Building 004",
    imageUrl: "/static/images/products/product_6.png",
    updatedAt: subHours(Date.now(), 5),
  },
  {
    id: uuid(),
    name: "Building 005",
    imageUrl: "/static/images/products/product_6.png",
    updatedAt: subHours(Date.now(), 9),
  },
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader subtitle={`${products.length} in total`} title="Latest Projects" />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
        View all
      </Button>
    </Box>
  </Card>
);