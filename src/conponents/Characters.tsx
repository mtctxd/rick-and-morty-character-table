const Characters = () => {
  return (
    <div className="container">
      <div className="table-app">
        <div className="table-app__container">
          <div className="table-app__heading">Characters</div>
          <div className="table-app__interface interface">
              <div className="interface__search">
                  Search
              </div>
              <div className="interface__options">
                  <div className="interface__option">
                      Species
                  </div>
                  <div className="interface__option">
                      Origin
                  </div>
                  <div className="interface__option">
                      Status
                  </div>
              </div>
              <div className="interface__actions">
                  <div className="interface__action">
                      Change status
                  </div>
                  <div className="interface__action">
                      Remove character
                  </div>
              </div>
          </div>
          <div className="table-app-table">table</div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
