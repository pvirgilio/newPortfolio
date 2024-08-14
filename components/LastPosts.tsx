"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const LinkedInPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const accessToken = "aRsBkTPcEDqsU5Ij"; // Substitua pelo seu token de acesso
        const response = await axios.get(
          "https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:person:773n06oedsr3vl",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Erro ao buscar posts do LinkedIn:", error);
      }
    };

    console.log("🚀 ~ useEffect ~ posts:", posts);
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Últimos Posts do LinkedIn</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{/* <p>{post.text}</p> */}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinkedInPosts;
