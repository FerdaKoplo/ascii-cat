# Render Test, Learning Basic 3D Shape Using ASCII as Based Shapes

# 1. Main Calculation

- Matrix Transformations: Rotates [X, Y, Z] vertices dynamically around the axes to animate the mesh in 3D space.

- Surface Normals (calculateNormal): Computes the cross product of a triangle's edges to determine the exact perpendicular direction the face is pointing

- Directional Lighting: Calculates the dot product between the surface normal and a fixed light source vector. High values receive dense ASCII characters (like @ or O), while low values fall into shadowed characters.

- Rasterization (fillTriangle): Evaluates bounding boxes and uses barycentric coordinates to determine exactly which 2D screen pixels fall inside the bounds of a 3D triangle.

# 2. Custom Geometry

- Vertices: The [X, Y, Z] spatial anchor points that define the volume of the shape on a 3D grid.
- Faces: Index arrays that connect the vertices in a strict circular winding order to form solid surfaces that catch light.

# 3. Memory Buffer

- Z-Buffer: Float32Array tracks the distance of every rendered pixel from the camera, guaranteeing that foreground triangles correctly overlap background geometry.

- Color Buffer: Tracks the exact CSS hex codes assigned to specific material indices.

- Screen Buffer: Holds the resolved ASCII shading characters before the engine loops through and slices the 1D array into a printable 2D HTML text grid.
