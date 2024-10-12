// src/ProjectForm.js
import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Link,
} from "@mui/material";

const ProjectForm = () => {
  const [gitURL, setGitURL] = useState("");
  const [slug, setSlug] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post("http://localhost:9000/project", {
        gitURL,
        slug,
      });
      setResponse(res.data);
    } catch (error) {
      setError("Error submitting form");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response.data.url).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Deploy Your Project
        </Typography>
        <TextField
          fullWidth
          label="Git Repository URL"
          variant="outlined"
          margin="normal"
          value={gitURL}
          onChange={(e) => setGitURL(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="name (optional)"
          variant="outlined"
          margin="normal"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          Submit
        </Button>
        {response && (
          <Alert severity="success" sx={{ mt: 2 }}>
            <Typography>
              Your website is being hosted. Click the link below to view your
              deployed project:
            </Typography>
            <Link
              href={response.data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {response.data.url}
            </Link>
            <Button variant="text" onClick={handleCopy}>
              Copy URL
            </Button>
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default ProjectForm;
