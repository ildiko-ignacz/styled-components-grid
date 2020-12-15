import React from "react";
import GridColumn from "./gridElements/GridColumn";
import GridRow from "./gridElements/GridRow";
import GlobalStyle from "./util/globalStyles";
import TestCard from "./TestCard";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <GlobalStyle />
      <div style={{ width: "100%" }}>
        <h1 style={{ padding: "35px" }}>Column sizes in width</h1>

        <div style={{ padding: "35px", marginBottom: "40px" }}>
          <GridRow>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="2">2 of 12</GridColumn>
            <GridColumn size="2">2 of 12</GridColumn>
            <GridColumn size="2">2 of 12</GridColumn>
            <GridColumn size="2">2 of 12</GridColumn>
            <GridColumn size="2">2 of 12</GridColumn>
            <GridColumn size="2">2 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="3">3 of 12</GridColumn>
            <GridColumn size="3">3 of 12</GridColumn>
            <GridColumn size="3">3 of 12</GridColumn>
            <GridColumn size="3">3 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="4">4 of 12</GridColumn>
            <GridColumn size="4">4 of 12</GridColumn>
            <GridColumn size="4">4 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="5">5 of 12</GridColumn>
            <GridColumn size="5">5 of 12</GridColumn>
            <GridColumn size="2">2 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="6">6 of 12</GridColumn>
            <GridColumn size="6">6 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="7">7 of 12</GridColumn>
            <GridColumn size="5">5 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="8">8 of 12</GridColumn>
            <GridColumn size="4">4 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="9">9 of 12</GridColumn>
            <GridColumn size="3">3 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="10">10 of 12</GridColumn>
            <GridColumn size="2">2 of 12</GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn size="11">11 of 12</GridColumn>
            <GridColumn size="1">1 of 12</GridColumn>
          </GridRow>
        </div>

        <h1 style={{ padding: "35px" }}>Column alignments</h1>

        <div style={{ padding: "35px", marginBottom: "40px" }}>
          <GridRow align="top">
            <GridColumn style={{ height: "150px" }}>
              Top aligned column
            </GridColumn>
            <GridColumn style={{ height: "100px" }}>
              Top aligned column
            </GridColumn>
            <GridColumn style={{ height: "50px" }}>
              Top aligned column
            </GridColumn>
          </GridRow>

          <GridRow align="center">
            <GridColumn style={{ height: "150px" }}>
              Center aligned column
            </GridColumn>
            <GridColumn style={{ height: "100px" }}>
              Center aligned column
            </GridColumn>
            <GridColumn style={{ height: "50px" }}>
              Center aligned column
            </GridColumn>
          </GridRow>

          <GridRow align="bottom">
            <GridColumn style={{ height: "150px" }}>
              Bottom aligned column
            </GridColumn>
            <GridColumn style={{ height: "100px" }}>
              Bottom aligned column
            </GridColumn>
            <GridColumn style={{ height: "50px" }}>
              Bottom aligned column
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn>
              So to cover everything, let’s check out what happens if we add
              padding and margin. Nothing too special actually. In the first
              step of the calculation you just have to remember to subtract the
              margins as well. The only thing to note is that in terms of
              box-sizing flex-basis behaves like the width property. That means
              that the calculation as well as the results change if the
              box-sizing property changes. If box-sizing was set to border-box,
              you would only work with the flex-basis and margin values in your
              calculation, because the padding is already included in the width.
            </GridColumn>
            <GridColumn>Stretched column</GridColumn>
            <GridColumn>Stretched column</GridColumn>
          </GridRow>
        </div>
      </div>

      <h1 style={{ padding: "35px" }}>Column justifying</h1>

      <div style={{ padding: "35px", marginBottom: "40px" }}>
        <GridRow>
          <GridColumn size="3">Left aligned column</GridColumn>
          <GridColumn size="3">Left aligned column</GridColumn>
          <GridColumn size="3">Left aligned column</GridColumn>
        </GridRow>

        <GridRow justify="spaceBetween">
          <GridColumn size="3">Space between column</GridColumn>
          <GridColumn size="3">Space between column</GridColumn>
          <GridColumn size="3">Space between column</GridColumn>
        </GridRow>

        <GridRow justify="center">
          <GridColumn size="3">Center aligned column</GridColumn>
          <GridColumn size="3">Center aligned column</GridColumn>
          <GridColumn size="3">Center aligned column</GridColumn>
        </GridRow>

        <GridRow justify="end">
          <GridColumn size="3">Right aligned column</GridColumn>
          <GridColumn size="3">Right aligned column</GridColumn>
          <GridColumn size="3">Right aligned column</GridColumn>
        </GridRow>
      </div>

      <h1 style={{ padding: "35px" }}>Example with content</h1>

      <div style={{ padding: "35px", marginBottom: "40px" }}>
        <GridRow>
          <GridColumn size="3">
            <TestCard
              title="This is a title"
              description="This is a description"
            ></TestCard>
          </GridColumn>
        </GridRow>

        <GridRow justify="end">
          <GridColumn size="6">
            <TestCard
              title="This is a title"
              description="This is a description"
            ></TestCard>
          </GridColumn>
        </GridRow>
      </div>
    </div>
  );
}

export default App;
