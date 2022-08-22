import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  MenuItem,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";
import { Download as DownloadIcon } from "../../icons/download";
import Select from "@mui/material/Select";

export const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Staff
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button startIcon={<UploadIcon fontSize="small" />} sx={{ mr: 1 }}>
          Import
        </Button>
        <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
          Export
        </Button>
        <Button color="primary" variant="contained">
          Add Staff
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 600 }} style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Search Staff"
              variant="outlined"
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.position}
              style={{ marginLeft: "1rem", width: 300 }}
              onChange={props.handleChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"support"}>Support</MenuItem>
              <MenuItem value={"manager"}>Manager</MenuItem>
              <MenuItem value={"designer"}>Designer</MenuItem>
              <MenuItem value={"worker"}>Workers</MenuItem>
            </Select>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
