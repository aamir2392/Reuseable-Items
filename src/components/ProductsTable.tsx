import { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductTableCellValue from "./ProductTableCellValue";
import ProductImgAndDescription from "./ProductImgDescription";
import products from "../data/products.json"; // Ensure this path is correct
import { useMediaQuery } from "@mui/material";

const ProductsTable: FC = () => {
  // Check if the screen width is mobile-sized (less than 600px)
  const isMobile = useMediaQuery("(min-width:800px)");

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {products.map((product, index) => (
            <TableRow
              key={index} // Make sure to use a unique key
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #E6E6E6",
              }}
            >
              {/* Image and Description Section */}
              <TableCell sx={{ display: "flex", border: "none" }}>
                <ProductImgAndDescription
                  src={product.image} // Use dynamic image from JSON
                  alt={product.description} // Dynamic alt text
                  productDescription={product.description} // Dynamic description
                />
              </TableCell>

              {/* Data Cells (Impressions, Clicks, Conversions, Sales) */}
              {isMobile ? (
                <TableCell sx={{ border: "none" }}>
                  {/* Accordion for Mobile */}
                  <Accordion
                    sx={{
                      boxShadow: "none",
                      padding: "0",
                      backgroundColor: "white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        padding: "0",
                        minHeight: "auto",
                        backgroundColor: "#F5F5F5",
                      }}
                    ></AccordionSummary>
                    <AccordionDetails sx={{}}>
                      <TableRow>
                        <TableCell sx={{ textAlign: "left" }}>
                          <ProductTableCellValue
                            headingText="Impressions"
                            change={product.impressions.change}
                            changeType={
                              product.impressions.changeType as
                                | "positive"
                                | "negative"
                            }
                            statistics={product.impressions.statistics}
                          />
                        </TableCell>
                        <TableCell sx={{ textAlign: "left" }}>
                          <ProductTableCellValue
                            headingText="Clicks"
                            change={product.clicks.change}
                            changeType={
                              product.clicks.changeType as
                                | "positive"
                                | "negative"
                            }
                            statistics={product.clicks.statistics}
                          />
                        </TableCell>
                        <TableCell sx={{ textAlign: "left" }}>
                          <ProductTableCellValue
                            headingText="Conversions"
                            change={product.conversions.change}
                            changeType={
                              product.conversions.changeType as
                                | "positive"
                                | "negative"
                            }
                            statistics={product.conversions.statistics}
                          />
                        </TableCell>
                        <TableCell sx={{ textAlign: "left" }}>
                          <ProductTableCellValue
                            headingText="Sales"
                            change={product.sales.change}
                            changeType={
                              product.sales.changeType as
                                | "positive"
                                | "negative"
                            }
                            statistics={product.sales.statistics}
                          />
                        </TableCell>
                      </TableRow>
                    </AccordionDetails>
                  </Accordion>
                </TableCell>
              ) : (
                // For larger screens, show data as usual
                <>
                  <TableCell sx={{ border: "none", textAlign: "left" }}>
                    <ProductTableCellValue
                      headingText="Impressions"
                      change={product.impressions.change}
                      changeType={product.impressions.changeType}
                      statistics={product.impressions.statistics}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none", textAlign: "left" }}>
                    <ProductTableCellValue
                      headingText="Clicks"
                      change={product.clicks.change}
                      changeType={product.clicks.changeType}
                      statistics={product.clicks.statistics}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none", textAlign: "left" }}>
                    <ProductTableCellValue
                      headingText="Conversions"
                      change={product.conversions.change}
                      changeType={product.conversions.changeType}
                      statistics={product.conversions.statistics}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "none", textAlign: "left" }}>
                    <ProductTableCellValue
                      headingText="Sales"
                      change={product.sales.change}
                      changeType={product.sales.changeType}
                      statistics={product.sales.statistics}
                    />
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
