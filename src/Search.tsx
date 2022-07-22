import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Search = () => {
  const [country, setCountry] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <FormControl style={{ width: "30%" }}>
        <InputLabel>Search</InputLabel>
        <Select value={country} label="Search" onChange={handleChange}>
          <MenuItem value={"Seoul"}>Seoul</MenuItem>
          <MenuItem value={"tokyo"}>tokyo</MenuItem>
          <MenuItem value={"USA"}>USA</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Search;
