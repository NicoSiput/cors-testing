const addItemEndpoint = () => {
  return `
  <div class="endpoint-item">
    <div class="card mt-2">
        <div class="card-body">
            <div class="card-title">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">/</span>
                    <input type="text" class="form-control endpoint"
                        placeholder="users (enter to hit the endpoint)" value="" />
                </div>
            </div>

            <div class="card-text result">
                <pre></pre>
            </div>
        </div>
    </div>
    </div>`;
};

export { addItemEndpoint };
