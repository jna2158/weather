import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Search() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <FormControl style={{ width: "30%" }}>
        <InputLabel>Search</InputLabel>
        <Select value={country} label="Search" onChange={handleChange}>
          <MenuItem value={"Seoul"}>Seoul</MenuItem>
          <MenuItem value={"Seoull"}>Seoull</MenuItem>
          <MenuItem value={"Seoulll"}>Seoulll</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
