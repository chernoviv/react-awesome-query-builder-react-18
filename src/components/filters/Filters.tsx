import { useCallback, useState } from "react";
import {
  Utils,
  Config,
  ImmutableTree,
  JsonGroup,
  BuilderProps,
  Builder,
  Query,
} from "react-awesome-query-builder";
import { queryBuilderConfig } from "config";
import { StyledWrapper } from "./styles";
import "react-awesome-query-builder/lib/css/styles.css";

const defaultLogic = {
  and: [
    { all: [{ var: "GroupB.FieldB" }, { in: [{ var: "" }, ["1", "2", "3"]] }] },
  ],
};

export const Filters: React.FC = () => {
  const [state, setState] = useState({
    tree: Utils.checkTree(
      Utils.loadFromJsonLogic(defaultLogic, queryBuilderConfig)!,
      queryBuilderConfig
    ),
    config: queryBuilderConfig,
  });

  const handleFilterChange = useCallback(
    (immutableTree: ImmutableTree, config: Config) => {
      setState((prev) => ({ ...prev, tree: immutableTree, config }));
    },
    []
  );

  const renderBuilder = useCallback(
    (props: BuilderProps) => (
      <div className="query-builder-container">
        <div className="query-builder">
          <Builder {...props} />
        </div>
      </div>
    ),
    []
  );

  return (
    <StyledWrapper>
      <Query
        {...queryBuilderConfig}
        value={state.tree}
        onChange={handleFilterChange}
        renderBuilder={renderBuilder}
      />
    </StyledWrapper>
  );
};
