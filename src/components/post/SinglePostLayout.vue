<template>
    <main>
        <div class="post">
            <h1 class="post-title">Post title</h1>
            <p class="post-excerpt">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Odit commodi delectus accusamus eius perferendis ducimus cumque iure vel!
                Exercitationem quis tenetur quas corporis necessitatibus itaque dolores reiciendis modi, fuga molestiae.
            </p>
            <div class="post-secondary">
                <p class="post-detail">
                    <i class="fa-regular fa-clock"></i>
                    03/25/2020
                </p>
                <p class="post-detail">
                    <i class="fa-regular fa-user"></i>
                    Username
                </p>
            </div>
            <hr>

            <img class="post-img" src="@/assets/placeholder_media.png" alt="placeholder media">
            <p class="post-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque nihil repellat dicta, voluptates officia corrupti autem omnis.
                Perferendis quam eaque sequi consequatur aspernatur dolores accusamus est atque facilis amet nulla necessitatibus ducimus alias, iusto, molestiae saepe totam vel, accusantium illum?
                Reprehenderit totam voluptatem, non earum id, saepe veniam molestias iusto odit soluta esse eos quis quidem dolorum.
                <br><br>
                Consequuntur atque ullam delectus aut quos eos tempore eaque fugiat quasi inventore iste explicabo iusto laboriosam corporis,
                animi quisquam soluta modi itaque in porro eius.
                Quidem dolorum distinctio aliquam ut blanditiis tempore ducimus?
                Dolore eius impedit reprehenderit iusto.
                Hic perferendis fuga possimus vitae consequuntur cumque optio obcaecati expedita dignissimos facere quidem eaque deserunt amet beatae maxime laboriosam in blanditiis,
                pariatur cupiditate officiis cum!
                <br><br>
                Accusantium deleniti, alias voluptatum aspernatur repellat at fugiat hic similique minus.
                Esse nulla ipsam iure quas excepturi sapiente.
                Impedit similique ipsa possimus debitis eum ipsam facilis assumenda veniam nemo atque facere accusamus esse ab placeat incidunt,
                aliquam et earum labore sapiente, ipsum officia aut?
                Unde cupiditate eaque voluptatum, placeat quibusdam eius omnis,
                repellendus dolores excepturi qui molestiae earum voluptatem porro soluta eum accusamus optio magni similique corrupti maiores voluptate itaque ut! Rem laboriosam,
                praesentium veniam laborum maiores vero ullam cupiditate iusto quod labore atque possimus,
                commodi facere molestiae esse quis nihil neque aperiam? Adipisci qui aliquid nulla omnis totam,
                voluptas aspernatur molestias excepturi laborum assumenda distinctio provident sit,
                fuga animi nobis pariatur dolore, harum est deleniti dignissimos consequatur magni soluta!
                <br><br>
                Id ratione itaque rerum voluptatum repellat culpa perspiciatis aperiam sed at commodi blanditiis non amet impedit aliquam nam temporibus nostrum,
                et hic accusantium ducimus optio veritatis saepe corrupti.
                Placeat provident perspiciatis fugit harum cupiditate, nemo accusantium iusto ipsam numquam quia?
            </p>
        </div>
    </main>
</template>

<script></script>

<style scoped>
    
    .post-title
    {
        font-size: 20px;
        font-weight: 600;
    }

    .post-img
    {
        margin-bottom: 10px;
        max-width: 100%;
        max-height: 100%;
    }

    .post-excerpt
    {
        font-size: 17px;
        margin: 10px 0;
    }

    .post-secondary
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .post-detail
    {
        font-size: 17px;
    }
</style>