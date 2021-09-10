import React from "react";
export default function ListDescription() {
    return (
        <div className="form-group">
            <label for="description" class="font-weight-bold display-4">
                Description
            </label>
            <textarea
                readonly
                className="form-control-plaintext lead"
                id="description"
                rows="4"
                placeholder="Description"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum laborum, atque quod commodi reprehenderit vel culpa
                excepturi, magni cumque eligendi doloribus beatae itaque! Animi
                fugiat rem totam nulla voluptatem et?
            </textarea>
        </div>
    );
}
