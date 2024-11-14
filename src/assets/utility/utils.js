export const slugify = (text) => {
    const hyphenated = text.replace(/\s+/g, '-');
 
  
  // Remove unwanted characters (retain Arabic letters)
  const slug = hyphenated.replace(/[^a-zA-Z0-9أبجديةة\s-]/g, '');
  
  return slug;
  

  };
  