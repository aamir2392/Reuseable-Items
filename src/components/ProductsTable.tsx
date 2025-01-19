import React, { FC } from "react";
import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import ProductTableCellValue from "./ProductTableCellValue";
import ProductImgAndDescription from "./ProductImgDescription";
import products from "../data/products.json"; // Ensure this path is correct
import Dropdown from "./Dropdown";

const ProductsTable: FC = () => {
  const isMobile = useMediaQuery("max-width: 600px");
  const handleOptionChange = (value: string) => {
    console.log("Selected Option:", value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {products.map((product, index) => (
              <React.Fragment key={index}>
                {/* Mobile View with Accordion */}
                {isMobile ? (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<MdExpandMore />}
                      aria-controls={`panel-${index}-content`}
                      id={`panel-${index}-header`}
                    >
                      <ProductImgAndDescription
                        src={product.image}
                        alt={product.description}
                        productDescription={product.description}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <TableRow>
                        <TableCell sx={{ border: "none" }}>
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
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ border: "none" }}>
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
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ border: "none" }}>
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
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ border: "none" }}>
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
                ) : (
                  // Desktop View without Accordion
                  <TableRow
                    key={index}
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
                    <TableCell sx={{ border: "none", textAlign: "left" }}>
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
                    <TableCell sx={{ border: "none", textAlign: "left" }}>
                      <ProductTableCellValue
                        headingText="Clicks"
                        change={product.clicks.change}
                        changeType={
                          product.clicks.changeType as "positive" | "negative"
                        }
                        statistics={product.clicks.statistics}
                      />
                    </TableCell>
                    <TableCell sx={{ border: "none", textAlign: "left" }}>
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
                    <TableCell sx={{ border: "none", textAlign: "left" }}>
                      <ProductTableCellValue
                        headingText="Sales"
                        change={product.sales.change}
                        changeType={
                          product.sales.changeType as "positive" | "negative"
                        }
                        statistics={product.sales.statistics}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-5 flex items-center py-2 justify-center lg:justify-between ">
        <div className="hidden lg:block">
          <p className="flex items-center gap-4 ">
            Showing
            <Dropdown
              options={["10", "20", "30", "40", "50"]}
              defaultValue="10"
              onChange={handleOptionChange}
              width="auto"
              height={40}
              selectedOptionColor="black"
            />{" "}
            Of 50
          </p>
        </div>

        {isMobile ? (
          <Pagination
            count={5}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "gray", // Set background for unselected pagination items
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "yellow", // Set background for the selected pagination item
                color: "black", // Optional: Set text color for the selected item to make it visible
              },
            }}
          />
        ) : (
          <Pagination
            count={5}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "gray", // Set background for unselected pagination items
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "yellow", // Set background for the selected pagination item
                color: "black", // Optional: Set text color for the selected item to make it visible
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default ProductsTable;
