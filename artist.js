$(document).ready(function () {
    // Artists data
    const artists = [
        {
            id: 1,
            name: "Jhon Smith",
            genre: "pop",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=250&fit=crop",
            bio: "Jhon Smith is a rising pop sensation known for her powerful vocals and captivating stage presence. Her debut album 'Midnight Dreams' topped charts worldwide.",
            albums: 3,
            songs: 42,
            followers: "2.3M",
            fullBio: "Born in Los Angeles, Luna Rodriguez discovered her passion for music at age 12. She spent years honing her craft in local venues before being discovered by a major record label. Her unique blend of pop and R&B has earned her critical acclaim and a devoted fanbase."
        },
        {
            id: 2,
            name: "Marcus Thompson",
            genre: "rock",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
            bio: "Marcus Thompson leads the indie rock band 'Electric Storm'. Known for his guitar skills and raw energy, he's been rocking stages across the country for over a decade.",
            albums: 5,
            songs: 67,
            followers: "1.8M",
            fullBio: "Marcus started playing guitar at age 8 and formed his first band in high school. After years of playing in dive bars and small venues, Electric Storm broke into the mainstream with their album 'Thunder Roads'. Marcus is known for his philanthropic work and environmental activism."
        },
        {
            id: 3,
            name: "Sofia Chen",
            genre: "jazz",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=250&fit=crop",
            bio: "Sofia Chen is a contemporary jazz pianist and composer. Her innovative approach to traditional jazz has earned her Grammy nominations and international recognition.",
            albums: 4,
            songs: 38,
            followers: "890K",
            fullBio: "A classically trained pianist, Sofia discovered jazz during her college years and never looked back. She has collaborated with some of the biggest names in jazz and has performed at prestigious venues like the Blue Note and Lincoln Center. Her compositions blend Eastern and Western musical traditions."
        },
        {
            id: 4,
            name: "Alex Rivera",
            genre: "electronic",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=250&fit=crop",
            bio: "Alex Rivera is an electronic music producer and DJ who has headlined major festivals worldwide. His unique sound combines elements of house, techno, and ambient music.",
            albums: 6,
            songs: 89,
            followers: "3.1M",
            fullBio: "Alex began experimenting with electronic music production in his bedroom as a teenager. His breakthrough came with the release of 'Digital Dreams', which became a global hit. He's known for his immersive live performances that combine music with stunning visual effects."
        },
        {
            id: 5,
            name: "Maya Patel",
            genre: "pop",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=250&fit=crop",
            bio: "Maya Patel is a pop artist known for her catchy hooks and socially conscious lyrics. Her latest single 'Rise Up' became an anthem for youth empowerment.",
            albums: 2,
            songs: 28,
            followers: "1.7M",
            fullBio: "Maya grew up in a musical family and started writing songs at age 14. Her debut album 'Colorful World' showcased her ability to blend pop sensibilities with meaningful messages. She's an advocate for mental health awareness and frequently performs at benefit concerts."
        },
        {
            id: 6,
            name: "Jake Morrison",
            genre: "rock",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=250&fit=crop",
            bio: "Jake Morrison is the frontman of alternative rock band 'Neon Nights'. His gritty vocals and honest songwriting have made him a voice for the millennial generation.",
            albums: 4,
            songs: 52,
            followers: "2.1M",
            fullBio: "Jake formed Neon Nights in college with his roommates. Their breakthrough album 'City Lights' dealt with themes of urban alienation and hope. Jake's raw, emotional performances have earned critical praise and a loyal following among alternative rock fans."
        },
        {
            id: 7,
            name: "Isabella Santos",
            genre: "jazz",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=250&fit=crop",
            bio: "Isabella Santos is a jazz vocalist with a sultry voice that brings new life to classic standards while creating compelling original compositions.",
            albums: 3,
            songs: 31,
            followers: "650K",
            fullBio: "Isabella grew up listening to Billie Holiday and Ella Fitzgerald, developing her distinctive vocal style. She's performed at jazz festivals across Europe and has collaborated with renowned jazz musicians. Her album 'Midnight Serenade' received critical acclaim for its fresh take on jazz classics."
        },
        {
            id: 8,
            name: "David Kim",
            genre: "electronic",
            image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=250&fit=crop",
            bio: "David Kim creates atmospheric electronic music that blends downtempo beats with organic instruments. His ambient soundscapes have been featured in films and commercials.",
            albums: 5,
            songs: 73,
            followers: "1.2M",
            fullBio: "David started as a classical violinist before discovering electronic music production. His unique approach involves recording live instruments and weaving them into electronic compositions. He's known for his cinematic sound design and has scored several independent films."
        },
        {
            id: 9,
            name: "Emma Walsh",
            genre: "pop",
            image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=250&fit=crop",
            bio: "Emma Walsh is a pop-rock artist whose powerful ballads and upbeat anthems have dominated radio waves. Her honest lyrics about love and self-discovery resonate with fans worldwide.",
            albums: 3,
            songs: 36,
            followers: "2.8M",
            fullBio: "Emma began performing in coffee shops during her college years before being discovered through social media. Her viral cover songs led to a record deal and eventual stardom. She's known for her authentic connection with fans and her advocacy for LGBTQ+ rights."
        },
    ];

    // Initialize the page
    init();

    function init() {
        displayArtists(artists);
        setupEventListeners();
    }

    function displayArtists(artistsToShow) {
        const grid = $('#artists-grid');
        grid.empty();

        artistsToShow.forEach((artist, index) => {
            const artistCard = createArtistCard(artist, index);
            grid.append(artistCard);
        });
    }

    function createArtistCard(artist, index) {
        return `
            <div class="artist-card" data-artist-id="${artist.id}" style="animation-delay: ${index * 0.1}s">
                <div class="artist-image" style="background-image: url('${artist.image}')">
                    
                </div>
                <div class="artist-info">
                    <h3 class="artist-name">${artist.name}</h3>
                    <p class="artist-genre">${capitalizeFirst(artist.genre)}</p>
                    <p class="artist-bio">${artist.bio}</p>
                    <div class="artist-stats">
                        <div class="stat">
                            <span class="stat-number">${artist.albums}</span>
                            <span class="stat-label">Albums</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${artist.songs}</span>
                            <span class="stat-label">Songs</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${artist.followers}</span>
                            <span class="stat-label">Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function setupEventListeners() {
        // Search functionality
        $('#search-input').on('input', function () {
            const searchTerm = $(this).val().toLowerCase();
            filterArtists();
        });

        // Genre filter
        $('#genre-filter').on('change', function () {
            filterArtists();
        });

        // Artist card click
        $(document).on('click', '.artist-card', function () {
            const artistId = $(this).data('artist-id');
            showArtistModal(artistId);
        });

        // Modal close
        $('.close').on('click', function () {
            $('#artist-modal').hide();
        });

        // Close modal when clicking outside
        $(window).on('click', function (event) {
            if (event.target.id === 'artist-modal') {
                $('#artist-modal').hide();
            }
        });

    
    }

    function filterArtists() {
        const searchTerm = $('#search-input').val().toLowerCase();
        const selectedGenre = $('#genre-filter').val();

        const filteredArtists = artists.filter(artist => {
            const matchesSearch = artist.name.toLowerCase().includes(searchTerm) ||
                artist.genre.toLowerCase().includes(searchTerm);
            const matchesGenre = selectedGenre === 'all' || artist.genre === selectedGenre;

            return matchesSearch && matchesGenre;
        });

        displayArtists(filteredArtists);
    }

    function showArtistModal(artistId) {
        const artist = artists.find(a => a.id === artistId);
        if (!artist) return;

        const modalContent = `
            <div class="modal-artist-image" style="background-image: url('${artist.image}')"></div>
            <h2 class="modal-artist-name">${artist.name}</h2>
            <p class="modal-artist-genre">${capitalizeFirst(artist.genre)}</p>
            <p class="modal-artist-bio">${artist.fullBio}</p>
            <div class="modal-stats">
                <div class="stat">
                    <span class="stat-number">${artist.albums}</span>
                    <span class="stat-label">Albums</span>
                </div>
                <div class="stat">
                    <span class="stat-number">${artist.songs}</span>
                    <span class="stat-label">Songs</span>
                </div>
                <div class="stat">
                    <span class="stat-number">${artist.followers}</span>
                    <span class="stat-label">Followers</span>
                </div>
            </div>
        `;

        $('#modal-body').html(modalContent);
        $('#artist-modal').show();
    }

    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});